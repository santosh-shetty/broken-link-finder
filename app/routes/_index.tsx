import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { z } from "zod";
import { createScan } from "~/models/scan.server";
import { crawlWebsite } from "~/services/linkChecker.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Broken Link Finder - Find and Fix Broken Links" },
    { 
      name: "description", 
      content: "Professional web tool to scan your website for broken links. Get detailed reports and fix broken links quickly." 
    },
  ];
};

const ScanSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
  maxDepth: z.coerce
    .number()
    .int("Depth must be a whole number")
    .min(1, "Minimum depth is 1")
    .max(10, "Maximum depth is 10"),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const result = ScanSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return json(
      { errors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const scan = createScan(result.data.url, result.data.maxDepth);
  
  // Start crawling in the background
  crawlWebsite(scan.id);
  
  return json({ scanId: scan.id });
}

export default function Index() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <div className="grid" style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "2rem",
        margin: "0 auto",
        maxWidth: "1400px",
        padding: "0 2rem"
      }}>
        <article className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <header style={{ marginBottom: "2rem", textAlign: "center" }}>
            <h2>Start Website Scan</h2>
            <p>Enter your website URL and configure scan settings below</p>
          </header>
          
          <Form method="post" className="grid gap-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div className="grid gap-3" style={{
        gridTemplateColumns: "repeat(1, 1fr)",
      }}>
              <div className="form-group">
                <label htmlFor="url" style={{ 
                  display: "block", 
                  marginBottom: "0.5rem",
                  fontWeight: "500"
                }}>
                  Website URL
                </label>
                <div className="input-group" style={{ 
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "stretch"
                }}>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    required
                    placeholder="https://example.com"
                    aria-invalid={actionData?.errors?.url ? true : undefined}
                    aria-errormessage={
                      actionData?.errors?.url ? "url-error" : undefined
                    }
                    style={{ 
                      flex: "1",
                      height: "2.75rem",
                      fontSize: "1rem",
                      padding: "0 1rem",
                      width: "fit-content",
                    }}
                  />
                  <button 
                    type="submit" 
                    aria-busy={isSubmitting}
                    style={{
                      minWidth: "140px",
                      height: "2.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      fontSize: "1rem",
                      fontWeight: "500"
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading"></span>
                        <span>Scanning...</span>
                      </>
                    ) : (
                      <>
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
                          <circle cx="11" cy="11" r="8"/>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        <span>Start Scan</span>
                      </>
                    )}
                  </button>
                </div>
                {actionData?.errors?.url && (
                  <small id="url-error" style={{ 
                    color: "var(--error-color)",
                    display: "block",
                    marginTop: "0.5rem"
                  }}>
                    {actionData.errors.url}
                  </small>
                )}
                <small className="help-text" style={{ 
                  display: "block",
                  marginTop: "0.5rem",
                  color: "var(--muted-color)"
                }}>
                  Enter the root URL of the website you want to scan for broken links
                </small>
              </div>

              <details style={{ marginTop: "1.5rem" }}>
                <summary role="button" className="secondary outline" style={{
                  padding: "0.75rem 1rem",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/>
                  </svg>
                  Advanced Settings
                </summary>
                <div className="grid gap-4 card" style={{ 
                  marginTop: "1rem",
                  padding: "1.5rem",
                  background: "#f8fafc"
                }}>
                  <div className="form-group">
                    <label htmlFor="maxDepth" style={{ 
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "500"
                    }}>
                      Maximum Crawl Depth
                      <span style={{ 
                        marginLeft: "0.5rem",
                        fontSize: "0.875rem",
                        color: "var(--muted-color)",
                        fontWeight: "normal"
                      }}>
                        (Current: <output id="depthValue">3</output>)
                      </span>
                    </label>
                    <input
                      type="range"
                      id="maxDepth"
                      name="maxDepth"
                      required
                      min="1"
                      max="10"
                      defaultValue="3"
                      onChange={(e) => {
                        document.getElementById("depthValue")!.textContent = e.target.value;
                      }}
                      aria-invalid={actionData?.errors?.maxDepth ? true : undefined}
                      aria-errormessage={
                        actionData?.errors?.maxDepth ? "maxDepth-error" : undefined
                      }
                      style={{ width: "100%" }}
                    />
                    <small className="help-text" style={{
                      display: "block",
                      marginTop: "0.5rem",
                      color: "var(--muted-color)"
                    }}>
                      Set how deep the scanner should crawl into your website structure (1-10 levels)
                    </small>
                    {actionData?.errors?.maxDepth && (
                      <small id="maxDepth-error" style={{ 
                        color: "var(--error-color)",
                        display: "block",
                        marginTop: "0.5rem"
                      }}>
                        {actionData.errors.maxDepth}
                      </small>
                    )}
                  </div>
                </div>
              </details>
            </div>
          </Form>
        </article>

        <article className="card" style={{ maxWidth: "800px", margin: "2rem auto 0" }}>
          <header style={{ marginBottom: "2rem", textAlign: "center" }}>
            <h3>How It Works</h3>
            <p>Three simple steps to find broken links on your website</p>
          </header>
          <div className="grid">
            <div className="stats-grid" style={{ 
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem"
            }}>
              <div className="stat-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔍</div>
                <h3>1. Enter URL</h3>
                <p>Input your website's URL to begin the scan</p>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚙️</div>
                <h3>2. Configure</h3>
                <p>Set scan depth and start the process</p>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📊</div>
                <h3>3. Get Results</h3>
                <p>View detailed report of broken links</p>
              </div>
            </div>
            <p className="help-text" style={{ 
              textAlign: "center", 
              marginTop: "2rem",
              maxWidth: "600px",
              margin: "2rem auto 0",
              color: "var(--muted-color)",
              lineHeight: "1.6"
            }}>
              Our tool will automatically crawl your website, checking each link it finds.
              You'll get a comprehensive report showing any broken links, their locations,
              and the specific issues encountered.
            </p>
          </div>
        </article>

        {actionData?.scanId && (
          <div style={{ maxWidth: "1400px", margin: "2rem auto", padding: "0 2rem" }}>
            <article 
              className="card" 
              role="alert" 
              style={{ 
                background: "#f0fdf4",
                borderColor: "var(--success-color)"
              }}
            >
              <header>
                <h3 style={{ color: "var(--success-color)" }}>
                  <span style={{ marginRight: "0.5rem" }}>✓</span>
                  Scan Started Successfully!
                </h3>
              </header>
              <p>
                Your website scan has been initiated. View the progress and results here:
              </p>
              <div className="button-group">
                <a 
                  href={`/scans/${actionData.scanId}`} 
                  role="button"
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  <span>View Results</span>
                </a>
              </div>
            </article>
          </div>
        )}

        <style>
          {`
            @keyframes loading {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .loading {
              display: inline-block;
              width: 1rem;
              height: 1rem;
              border: 2px solid #ffffff;
              border-top-color: transparent;
              border-radius: 50%;
              animation: loading 0.75s infinite linear;
            }

            @media (max-width: 768px) {
              .grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}
