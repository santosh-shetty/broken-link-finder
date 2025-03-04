import { nanoid } from "nanoid";

interface Link {
  url: string;
  foundOn: string;
  error?: string;
}

interface Scan {
  id: string;
  url: string;
  maxDepth: number;
  status: "pending" | "running" | "completed";
  startedAt: number;
  completedAt?: number;
  links: Link[];
  crawledUrls: Set<string>;
  totalUrls: number;
}

const scans = new Map<string, Scan>();

export function createScan(url: string, maxDepth: number): Scan {
  const scan: Scan = {
    id: nanoid(),
    url,
    maxDepth,
    status: "pending",
    startedAt: Date.now(),
    links: [],
    crawledUrls: new Set(),
    totalUrls: 0
  };

  scans.set(scan.id, scan);
  return scan;
}

export function getScan(id: string): Scan | undefined {
  return scans.get(id);
}

export function updateScan(id: string, updates: Partial<Scan>): void {
  const scan = scans.get(id);
  if (scan) {
    Object.assign(scan, updates);
  }
}

export function addLink(scanId: string, link: Link): void {
  const scan = scans.get(scanId);
  if (scan) {
    scan.links.push(link);
  }
}

export function addCrawledUrl(scanId: string, url: string): void {
  const scan = scans.get(scanId);
  if (scan) {
    scan.crawledUrls.add(url);
  }
}

export function setTotalUrls(scanId: string, total: number): void {
  const scan = scans.get(scanId);
  if (scan) {
    scan.totalUrls = total;
  }
}

export function completeScan(scanId: string): void {
  const scan = scans.get(scanId);
  if (scan) {
    scan.status = "completed";
    scan.completedAt = Date.now();
  }
}

export function getBrokenLinks(scanId: string): Array<{ url: string; sourceUrl: string; statusCode?: number; error?: string }> {
  const scan = scans.get(scanId);
  if (!scan) {
    return [];
  }

  return scan.links
    .filter(link => link.error)
    .map(link => ({
      url: link.url,
      sourceUrl: link.foundOn,
      statusCode: link.error?.includes("status") ? parseInt(link.error.match(/\d+/)?.[0] || "") : undefined,
      error: link.error
    }));
}
