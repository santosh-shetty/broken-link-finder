import axios from "axios";
import * as cheerio from "cheerio";
import { addLink, getScan, updateScan, type Scan } from "~/models/scan.server";

const MAX_CONCURRENT_REQUESTS = Number(process.env.MAX_CONCURRENT_REQUESTS) || 5;
const REQUEST_TIMEOUT = Number(process.env.REQUEST_TIMEOUT) || 30000;

export async function checkLink(url: string): Promise<{
  statusCode?: number;
  error?: string;
}> {
  try {
    const response = await axios.get(url, {
      timeout: REQUEST_TIMEOUT,
      maxRedirects: 5,
      validateStatus: null,
    });
    return { statusCode: response.status };
  } catch (error) {
    return { error: error.message };
  }
}

export function isInternalLink(baseUrl: string, link: string): boolean {
  try {
    const base = new URL(baseUrl);
    const url = new URL(link, baseUrl);
    return base.hostname === url.hostname;
  } catch {
    return false;
  }
}

export async function extractLinks(url: string): Promise<string[]> {
  try {
    const response = await axios.get(url, { timeout: REQUEST_TIMEOUT });
    const $ = cheerio.load(response.data);
    const links = new Set<string>();

    $("a").each((_, element) => {
      const href = $(element).attr("href");
      if (href && !href.startsWith("#") && !href.startsWith("mailto:")) {
        try {
          const absoluteUrl = new URL(href, url).toString();
          links.add(absoluteUrl);
        } catch {
          // Invalid URL, skip
        }
      }
    });

    return Array.from(links);
  } catch {
    return [];
  }
}

export async function crawlWebsite(scanId: string) {
  /**
   * Get the scan object for the given ID.
   * @param {string} scanId The scan ID to retrieve.
   * @returns {Scan | null} The scan object if found, null otherwise.
   */
  const scan = getScan(scanId);
  if (!scan) return;

  updateScan({ id: scanId, status: "running" });

  const visited = new Set<string>();
  const queue: Array<{ url: string; depth: number; sourceUrl: string }> = [
    { url: scan.url, depth: 0, sourceUrl: scan.url },
  ];

  let processing = 0;
  let totalLinks = 0;
  let brokenLinks = 0;

  async function processNext() {
    if (processing >= MAX_CONCURRENT_REQUESTS || queue.length === 0) {
      return;
    }

    const { url, depth, sourceUrl } = queue.shift()!;
    if (visited.has(url) || depth > scan.maxDepth) {
      if (queue.length > 0) await processNext();
      return;
    }

    processing++;
    visited.add(url);
    totalLinks++;

    try {
      // Check the link
      const result = await checkLink(url);
      const isInternal = isInternalLink(scan.url, url);

      if (result.statusCode && result.statusCode >= 400) {
        brokenLinks++;
      }

      // Add to database
      addLink({
        scanId,
        url,
        sourceUrl,
        statusCode: result.statusCode,
        error: result.error,
        isInternal,
        depth,
        checkedAt: Date.now(),
      });

      // Update scan stats
      updateScan({
        id: scanId,
        totalLinks,
        brokenLinks,
      });

      // If internal link and no errors, extract more links
      if (isInternal && !result.error && result.statusCode && result.statusCode < 400) {
        const links = await extractLinks(url);
        for (const link of links) {
          if (!visited.has(link)) {
            queue.push({ url: link, depth: depth + 1, sourceUrl: url });
          }
        }
      }
    } catch (error) {
      brokenLinks++;
      addLink({
        scanId,
        url,
        sourceUrl,
        error: error.message,
        isInternal: isInternalLink(scan.url, url),
        depth,
        checkedAt: Date.now(),
      });
    }

    processing--;
    if (queue.length > 0) {
      await processNext();
    } else if (processing === 0) {
      // All done
      updateScan({
        id: scanId,
        status: "completed",
        completedAt: Date.now(),
        totalLinks,
        brokenLinks,
      });
    }
  }

  // Start initial batch of requests
  const initialBatch = Math.min(MAX_CONCURRENT_REQUESTS, queue.length);
  for (let i = 0; i < initialBatch; i++) {
    await processNext();
  }
}
