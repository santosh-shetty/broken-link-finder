import { nanoid } from "nanoid";

export type Scan = {
  id: string;
  url: string;
  status: "pending" | "running" | "completed" | "error";
  startedAt: number;
  completedAt?: number;
  totalLinks: number;
  brokenLinks: number;
  maxDepth: number;
};

export type Link = {
  id: string;
  scanId: string;
  url: string;
  sourceUrl: string;
  statusCode?: number;
  error?: string;
  isInternal: boolean;
  depth: number;
  checkedAt: number;
};

// In-memory storage
const scans = new Map<string, Scan>();
const links = new Map<string, Link[]>();

export function createScan(url: string, maxDepth: number = 3): Scan {
  const scan: Scan = {
    id: nanoid(),
    url,
    status: "pending",
    startedAt: Date.now(),
    totalLinks: 0,
    brokenLinks: 0,
    maxDepth,
  };

  scans.set(scan.id, scan);
  links.set(scan.id, []);
  return scan;
}

export function getScan(id: string): Scan | null {
  return scans.get(id) || null;
}

export function updateScan(scan: Partial<Scan> & { id: string }): void {
  const existingScan = scans.get(scan.id);
  if (existingScan) {
    scans.set(scan.id, { ...existingScan, ...scan });
  }
}

export function addLink(link: Omit<Link, "id">): Link {
  const fullLink: Link = {
    ...link,
    id: nanoid(),
  };

  const scanLinks = links.get(link.scanId) || [];
  scanLinks.push(fullLink);
  links.set(link.scanId, scanLinks);

  return fullLink;
}

export function getBrokenLinks(scanId: string): Link[] {
  const scanLinks = links.get(scanId) || [];
  return scanLinks.filter(
    (link) => link.statusCode >= 400 || link.error !== undefined
  );
}

export function getAllLinks(scanId: string): Link[] {
  return links.get(scanId) || [];
}
