import axios from "axios";
import * as cheerio from "cheerio";
import { addCrawledUrl, addLink, completeScan, setTotalUrls, updateScan } from "~/models/scan.server";

// Get environment variables with defaults
const MAX_CONCURRENT_REQUESTS = Number(process.env.MAX_CONCURRENT_REQUESTS) || 5;
const REQUEST_TIMEOUT = Number(process.env.REQUEST_TIMEOUT) || 30000;

async function checkLink(url: string, foundOn: string): Promise<{ url: string; foundOn: string; error?: string }> {
  try {
    await axios.head(url, { timeout: REQUEST_TIMEOUT });
    return { url, foundOn };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        url,
        foundOn,
        error: error.response ? `HTTP ${error.response.status}` : error.message
      };
    }
    return { url, foundOn, error: "Unknown error" };
  }
}

function normalizeUrl(baseUrl: string, url: string): string {
  try {
    return new URL(url, baseUrl).toString();
  } catch {
    return url;
  }
}

function isInternalLink(baseUrl: string, url: string): boolean {
  try {
    const base = new URL(baseUrl);
    const target = new URL(url, baseUrl);
    return base.hostname === target.hostname;
  } catch {
    return false;
  }
}

async function extractLinks(url: string, html: string): Promise<string[]> {
  const $ = cheerio.load(html);
  const links: string[] = [];

  $("a[href]").each((_, element) => {
    const href = $(element).attr("href");
    if (href) {
      const normalizedUrl = normalizeUrl(url, href);
      if (normalizedUrl.startsWith("http")) {
        links.push(normalizedUrl);
      }
    }
  });

  return [...new Set(links)]; // Remove duplicates
}

async function crawlPage(scanId: string, url: string, maxDepth: number, depth = 0, visited = new Set<string>()): Promise<void> {
  if (depth >= maxDepth || visited.has(url)) {
    return;
  }

  visited.add(url);
  addCrawledUrl(scanId, url);

  try {
    const response = await axios.get(url, { timeout: REQUEST_TIMEOUT });
    const links = await extractLinks(url, response.data);
    
    // Check all links concurrently in batches
    const batches = [];
    for (let i = 0; i < links.length; i += MAX_CONCURRENT_REQUESTS) {
      const batch = links.slice(i, i + MAX_CONCURRENT_REQUESTS).map(link => 
        checkLink(link, url).then(result => {
          addLink(scanId, result);
          
          // Recursively crawl internal links
          if (!result.error && isInternalLink(url, link) && depth < maxDepth) {
            return crawlPage(scanId, link, maxDepth, depth + 1, visited);
          }
        })
      );
      batches.push(Promise.all(batch));
    }
    
    await Promise.all(batches);
  } catch (error) {
    console.error(`Error crawling ${url}:`, error);
    if (depth === 0) {
      // If this is the initial URL and it fails, mark the scan as complete
      completeScan(scanId);
    }
  }
}

export async function crawlWebsite(scanId: string): Promise<void> {
  const scan = await import("~/models/scan.server").then(m => m.getScan(scanId));
  if (!scan) return;

  try {
    updateScan(scanId, { status: "running" });
    
    // First, count total URLs by doing a dry run
    const visited = new Set<string>();
    async function countUrls(url: string, depth = 0): Promise<void> {
      if (depth >= scan.maxDepth || visited.has(url)) return;
      visited.add(url);
      
      try {
        const response = await axios.get(url, { timeout: REQUEST_TIMEOUT });
        const links = await extractLinks(url, response.data);
        
        for (const link of links) {
          if (isInternalLink(url, link) && !visited.has(link)) {
            await countUrls(link, depth + 1);
          }
        }
      } catch (error) {
        console.error(`Error counting URLs at ${url}:`, error);
      }
    }
    
    await countUrls(scan.url);
    setTotalUrls(scanId, visited.size);
    
    // Now do the actual crawl
    await crawlPage(scanId, scan.url, scan.maxDepth);
    completeScan(scanId);
  } catch (error) {
    console.error("Error during website crawl:", error);
    completeScan(scanId);
  }
}
