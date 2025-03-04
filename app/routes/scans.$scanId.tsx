import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useRevalidator } from "@remix-run/react";
import { useEffect } from "react";
import { getAllLinks, getBrokenLinks, getScan } from "~/models/scan.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const scan = getScan(params.scanId!);
  if (!scan) {
    throw new Response("Not Found", { status: 404 });
  }

  const links = getAllLinks(scan.id);
  const brokenLinks = getBrokenLinks(scan.id);

  return json({
    scan,
    links,
    brokenLinks,
  });
}

export default function ScanResults() {
  const { scan, links, brokenLinks } = useLoaderData<typeof loader>();
  const revalidator = useRevalidator();

  // Auto-refresh while scan is running
  useEffect(() => {
    if (scan.status === "running") {
      const timer = setInterval(() => {
        revalidator.revalidate();
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [scan.status, revalidator]);

  return (
    <div className="grid gap-6">
      <article className="card">
        <header>
          <h2>Scan Results</h2>
          <p>Status: <span className={`badge ${scan.status}`}>{scan.status}</span></p>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>{scan.totalLinks}</h3>
            <p>Total Links</p>
          </div>
          <div className="stat-card">
            <h3>{scan.brokenLinks}</h3>
            <p>Broken Links</p>
          </div>
          <div className="stat-card">
            <h3>{scan.maxDepth}</h3>
            <p>Max Depth</p>
          </div>
        </div>

        <div className="grid">
          <p><strong>Website:</strong> {scan.url}</p>
          <p><strong>Started:</strong> {new Date(scan.startedAt).toLocaleString()}</p>
          {scan.completedAt && (
            <p><strong>Completed:</strong> {new Date(scan.completedAt).toLocaleString()}</p>
          )}
        </div>
      </article>

      {scan.status === "running" && (
        <article className="card" role="alert">
          <div className="grid">
            <p>Scanning in progress... The results will update automatically.</p>
            <progress></progress>
          </div>
        </article>
      )}

      {brokenLinks.length > 0 && (
        <article className="card">
          <header>
            <h3>Broken Links Found</h3>
            <p>We found {brokenLinks.length} broken links on your website</p>
          </header>

          <div className="overflow-auto">
            <table role="grid">
              <thead>
                <tr>
                  <th>Broken Link</th>
                  <th>Source Page</th>
                  <th>Status</th>
                  <th>Error</th>
                </tr>
              </thead>
              <tbody>
                {brokenLinks.map((link) => (
                  <tr key={link.id}>
                    <td>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        {link.url}
                      </a>
                    </td>
                    <td>
                      <a
                        href={link.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        {link.sourceUrl}
                      </a>
                    </td>
                    <td>
                      <span className="badge error">
                        {link.statusCode || "Error"}
                      </span>
                    </td>
                    <td>{link.error || "HTTP " + link.statusCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      )}

      <div className="button-group">
        <a href="/" role="button" className="secondary">
          New Scan
        </a>
        {scan.status === "completed" && brokenLinks.length > 0 && (
          <a
            href={`/scans/${scan.id}/export`}
            role="button"
            download="broken-links.csv"
          >
            Export Results (CSV)
          </a>
        )}
      </div>

      <style>
        {`
          .badge {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 999px;
            font-size: 0.875rem;
            font-weight: 500;
            text-transform: capitalize;
          }
          .badge.running {
            background: var(--primary);
            color: white;
          }
          .badge.completed {
            background: var(--form-element-valid-border-color);
            color: white;
          }
          .badge.error {
            background: var(--form-element-invalid-border-color);
            color: white;
          }
          .badge.pending {
            background: var(--muted-border-color);
            color: var(--muted-color);
          }
          .link {
            color: var(--primary);
            text-decoration: none;
            word-break: break-all;
          }
          .link:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}
