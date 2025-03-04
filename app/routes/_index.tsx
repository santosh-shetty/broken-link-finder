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
    <div className="grid gap-6">
      <article className="card">
        <header>
          <h2>Start Website Scan</h2>
          <p>Enter your website URL and configure scan settings below</p>
        </header>
        
        <Form method="post" className="grid gap-4">
          <div className="grid">
            <label htmlFor="url">Website URL</label>
            <div className="input-group">
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
              />
              <button 
                type="submit" 
                aria-busy={isSubmitting}
                style={{
                  minWidth: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem"
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
              <small id="url-error" style={{ color: "var(--error-color)" }}>
                {actionData.errors.url}
              </small>
            )}
            <small className="help-text">
              Enter the root URL of the website you want to scan for broken links
            </small>
          </div>

          <details>
            <summary role="button" className="secondary outline">Advanced Settings</summary>
            <div className="grid gap-4 card" style={{ marginTop: "1rem" }}>
              <div className="grid">
                <label htmlFor="maxDepth">
                  Maximum Crawl Depth
                  <span 
                    style={{ 
                      marginLeft: "0.5rem",
                      fontSize: "0.875rem",
                      color: "var(--muted-color)"
                    }}
                  >
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
                />
                <small className="help-text">
                  Set how deep the scanner should crawl into your website structure (1-10 levels)
                </small>
                {actionData?.errors?.maxDepth && (
                  <small id="maxDepth-error" style={{ color: "var(--error-color)" }}>
                    {actionData.errors.maxDepth}
                  </small>
                )}
              </div>
            </div>
          </details>
        </Form>
      </article>

      <article className="card">
        <header>
          <h3>How It Works</h3>
          <p>Three simple steps to find broken links on your website</p>
        </header>
        <div className="grid">
          <div className="stats-grid">
            <div className="stat-card">
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔍</div>
              <h3>1. Enter URL</h3>
              <p>Input your website's URL to begin the scan</p>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚙️</div>
              <h3>2. Configure</h3>
              <p>Set scan depth and start the process</p>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📊</div>
              <h3>3. Get Results</h3>
              <p>View detailed report of broken links</p>
            </div>
          </div>
          <p className="help-text" style={{ textAlign: "center", marginTop: "1.5rem" }}>
            Our tool will automatically crawl your website, checking each link it finds.
            You'll get a comprehensive report showing any broken links, their locations,
            and the specific issues encountered.
          </p>
        </div>
      </article>

      {actionData?.scanId && (
        <article className="card" role="alert" style={{ 
          background: "#f0fdf4",
          borderColor: "var(--success-color)"
        }}>
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
        `}
      </style>
    </div>
  );
}
