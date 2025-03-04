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
    <div className="grid gap-4">
      <article>
        <header>
          <h2>Scan Status: {scan.status}</h2>
        </header>
        <div className="grid">
          <p>URL: {scan.url}</p>
          <p>Total Links: {scan.totalLinks}</p>
          <p>Broken Links: {scan.brokenLinks}</p>
          {scan.completedAt && (
            <p>
              Completed:{" "}
              {new Date(scan.completedAt).toLocaleString()}
            </p>
          )}
        </div>
      </article>

      {brokenLinks.length > 0 && (
        <article>
          <header>
            <h3>Broken Links</h3>
          </header>
          <div className="overflow-auto">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Source Page</th>
                  <th>Status</th>
                  <th>Error</th>
                </tr>
              </thead>
              <tbody>
                {brokenLinks.map((link) => (
                  <tr key={link.id}>
                    <td>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.url}
                      </a>
                    </td>
                    <td>
                      <a
                        href={link.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.sourceUrl}
                      </a>
                    </td>
                    <td>{link.statusCode}</td>
                    <td>{link.error}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      )}

      {scan.status === "completed" && (
        <div className="grid">
          <a
            href={`/scans/${scan.id}/export`}
            className="button"
            download="broken-links.csv"
          >
            Export Results (CSV)
          </a>
        </div>
      )}
    </div>
  );
}
