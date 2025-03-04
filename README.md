# Broken Link Finder

A web-based tool built with Remix that helps you find broken links on websites.

## Features

- URL scanning for broken links
- Support for internal and external link checking
- Configurable crawl depth
- Progress tracking
- Detailed reporting with source pages
- Export results as CSV
- Rate limiting and parallel request handling
- Respect for robots.txt and nofollow directives

## Tech Stack

- Frontend: Remix (React-based framework)
- Backend: Node.js with Remix server-side functions
- Storage: In-memory with Map
- Link Checking: Axios + Cheerio

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

## Environment Variables

Create a `.env` file with the following variables:

```
MAX_CONCURRENT_REQUESTS=5
REQUEST_TIMEOUT=30000
MAX_DEPTH=10
```

## API Documentation

### Models

#### Scan Model
```typescript
type Scan = {
  id: string;          // Unique identifier for the scan
  url: string;         // URL being scanned
  status: "pending" | "running" | "completed" | "error";  // Current scan status
  startedAt: number;   // Timestamp when scan started
  completedAt?: number; // Timestamp when scan completed
  totalLinks: number;   // Total number of links found
  brokenLinks: number;  // Number of broken links found
  maxDepth: number;     // Maximum crawl depth
};
```

#### Link Model
```typescript
type Link = {
  id: string;          // Unique identifier for the link
  scanId: string;      // Reference to parent scan
  url: string;         // The link URL
  sourceUrl: string;   // URL of the page where link was found
  statusCode?: number; // HTTP status code
  error?: string;      // Error message if request failed
  isInternal: boolean; // Whether link is internal to scanned site
  depth: number;       // Depth level in crawl tree
  checkedAt: number;   // Timestamp when link was checked
};
```

### Core Functions

#### Scan Management

##### `createScan(url: string, maxDepth: number = 3): Scan`
Creates a new scan for the given URL with specified depth.
- `url`: Website URL to scan
- `maxDepth`: How deep to crawl (1-10)
- Returns: New scan object

##### `getScan(id: string): Scan | null`
Retrieves a scan by its ID.
- `id`: Scan identifier
- Returns: Scan object if found, null otherwise

##### `updateScan(scan: Partial<Scan> & { id: string }): void`
Updates scan properties.
- `scan`: Object with scan ID and properties to update

#### Link Management

##### `addLink(link: Omit<Link, "id">): Link`
Adds a new link to a scan.
- `link`: Link properties (without ID)
- Returns: Complete link object with generated ID

##### `getBrokenLinks(scanId: string): Link[]`
Gets all broken links for a scan.
- `scanId`: Scan identifier
- Returns: Array of broken links (status >= 400 or with errors)

##### `getAllLinks(scanId: string): Link[]`
Gets all links for a scan.
- `scanId`: Scan identifier
- Returns: Array of all links

### Link Checker Service

#### URL Processing

##### `checkLink(url: string): Promise<{ statusCode?: number; error?: string; }>`
Checks if a URL is accessible.
- `url`: URL to check
- Returns: Status code or error message

##### `isInternalLink(baseUrl: string, link: string): boolean`
Determines if a link belongs to the same domain.
- `baseUrl`: Base website URL
- `link`: URL to check
- Returns: true if internal, false if external

##### `extractLinks(url: string): Promise<string[]>`
Extracts all links from a webpage.
- `url`: Page URL to extract from
- Returns: Array of found URLs

##### `crawlWebsite(scanId: string): Promise<void>`
Main crawling function that processes a website.
- `scanId`: Scan identifier
- Manages concurrent requests and depth tracking
- Updates scan progress in real-time

### Routes

#### Home Page (`/`)
- URL input form
- Depth configuration
- Scan initiation

#### Scan Results (`/scans/:scanId`)
- Real-time progress tracking
- Broken links table
- Export functionality

#### Export (`/scans/:scanId/export`)
- CSV download of broken links
- Includes URLs, sources, and error details

## Performance Considerations

- Concurrent requests are limited to prevent overwhelming target servers
- Rate limiting is implemented to avoid being blocked
- Memory usage scales with number of links found
- Data persists only during server runtime

## Note

This version uses in-memory storage with JavaScript Map, so all data will be lost when the server restarts.

## License

MIT
