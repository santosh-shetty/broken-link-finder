import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useRevalidator } from "@remix-run/react";
import { useEffect } from "react";
import { getScan } from "~/models/scan.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const scan = getScan(params.scanId!);
  if (!scan) {
    throw new Response("Scan not found", { status: 404 });
  }
  return json({ scan });
}

export default function ScanResults() {
  const { scan } = useLoaderData<typeof loader>();
  const revalidator = useRevalidator();

  useEffect(() => {
    if (scan.status === "running") {
      const timer = setInterval(() => {
        revalidator.revalidate();
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [scan.status, revalidator]);

  // Initialize with default values and handle potential undefined values
  const links = scan.links || [];
  const totalLinks = links.length;
  const brokenLinks = links.filter((link) => link.error).length;
  const workingLinks = totalLinks - brokenLinks;
  const crawledUrls = scan.crawledUrls || new Set();
  const totalUrls = scan.totalUrls || 0;
  const completionPercentage = totalUrls > 0 ? (crawledUrls.size / totalUrls) * 100 : 0;

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div  style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "2rem",
      }}>
          <article className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <header style={{ marginBottom: "2rem", textAlign: "center" }}>
              <h2>Scan Results</h2>
              <p style={{ color: "var(--muted-color)" }}>
                {scan.status === "running" ? (
                  "Scanning in progress... Results will update automatically."
                ) : (
                  "Scan completed. Review the results below."
                )}
              </p>
            </header>

            <div className="stats-grid" style={{ 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem"
            }}>
              <div className="stat-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔗</div>
                <h3>{totalLinks}</h3>
                <p>Total Links</p>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
                <h3>{workingLinks}</h3>
                <p>Working Links</p>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>❌</div>
                <h3>{brokenLinks}</h3>
                <p>Broken Links</p>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📊</div>
                <h3>{Math.round(completionPercentage)}%</h3>
                <p>Scan Progress</p>
              </div>
            </div>

            {scan.status === "running" && (
              <div style={{ marginTop: "2rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem" }}>Scan Progress</label>
                <progress value={completionPercentage} max="100" style={{ width: "100%" }}></progress>
                <small className="help-text" style={{ 
                  display: "block", 
                  marginTop: "0.5rem",
                  textAlign: "center",
                  color: "var(--muted-color)"
                }}>
                  Scanning page {crawledUrls.size} of {totalUrls} pages
                </small>
              </div>
            )}
          </article>

          <div className="grid gap-4" style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "2rem",
      }}> 
            <div className="button-group" style={{ 
              justifyContent: "space-between", 
              alignItems: "center",
              margin: "2rem 0"
            }}>
              <h3 style={{ margin: 0 }}>Link Analysis</h3>
              {scan.status === "completed" && links.length > 0 && (
                <a
                  href={`/scans/${scan.id}/export`}
                  role="button"
                  className="outline"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>Export CSV</span>
                </a>
              )}
            </div>

            {links.length > 0 ? (
              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ overflowX: "auto" }}>
                  <table>
                    <thead>
                      <tr>
                        <th style={{ width: "100px" }}>Status</th>
                        <th>URL</th>
                        <th>Found On</th>
                        <th style={{ width: "200px" }}>Error</th>
                      </tr>
                    </thead>
                    <tbody>
                      {links.map((link, index) => (
                        <tr key={`${link.url}-${index}`}>
                          <td>
                            <span
                              className="badge"
                              style={{
                                background: link.error
                                  ? "var(--error-color)"
                                  : "var(--success-color)",
                                color: "white",
                                padding: "0.25rem 0.75rem",
                                borderRadius: "1rem",
                                fontSize: "0.875rem",
                                fontWeight: "500",
                                display: "inline-block"
                              }}
                            >
                              {link.error ? "Broken" : "Working"}
                            </span>
                          </td>
                          <td style={{ maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: link.error ? "var(--error-color)" : "var(--primary)",
                                textDecoration: "none"
                              }}
                              title={link.url}
                            >
                              {link.url}
                            </a>
                          </td>
                          <td style={{ maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            <a
                              href={link.foundOn}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: "none" }}
                              title={link.foundOn}
                            >
                              {link.foundOn}
                            </a>
                          </td>
                          <td style={{ 
                            maxWidth: "200px",
                            color: "var(--muted-color)",
                            fontSize: "0.875rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          }} title={link.error}>
                            {link.error || "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <article className="card" style={{ textAlign: "center", padding: "3rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
                <h3>No Links Found Yet</h3>
                <p style={{ color: "var(--muted-color)", maxWidth: "400px", margin: "1rem auto" }}>
                  {scan.status === "running"
                    ? "We're currently scanning your website for links. Results will appear here as they're found."
                    : "No links were found during the scan. This might indicate an issue accessing your website."}
                </p>
              </article>
            )}
          </div>

          {scan.status === "completed" && (
            <article 
              className="card" 
              style={{ 
                background: "#f0fdf4",
                borderColor: "var(--success-color)",
                textAlign: "center",
                maxWidth: "800px",
                margin: "2rem auto"
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✨</div>
              <h3>Scan Completed!</h3>
              <p style={{ color: "var(--muted-color)", maxWidth: "500px", margin: "1rem auto" }}>
                We've finished scanning your website. You can now review all the links
                above or export them to CSV for further analysis.
              </p>
              <div className="button-group" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
                <a
                  href="/"
                  role="button"
                  className="outline"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18"/>
                  </svg>
                  <span>Start New Scan</span>
                </a>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}
