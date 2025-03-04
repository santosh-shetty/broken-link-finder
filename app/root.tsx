import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Broken Link Finder</title>
        <Meta />
        <Links />
        <style>
          {`
            :root {
              --primary: #3b82f6;
              --primary-hover: #2563eb;
              --font-family: 'Inter', system-ui, sans-serif;
              --spacing: 1rem;
              --border-radius: 0.5rem;
              --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
              --card-background: #ffffff;
              --muted-color: #64748b;
              --success-color: #22c55e;
              --error-color: #ef4444;
              --warning-color: #f59e0b;
            }

            body {
              margin: 0;
              padding: 0;
              background-color: #f8fafc;
              min-height: 100vh;
            }

            .container {
              width: 100%;
            }

            header.app-header {
              background: white;
              border-bottom: 1px solid #e2e8f0;
              padding: 2rem;
              margin-bottom: 2rem;
              text-align: center;
            }

            header.app-header h1 {
              margin: 0;
              font-size: 2.5rem;
              font-weight: 700;
              color: var(--primary);
              letter-spacing: -0.025em;
            }

            header.app-header p {
              margin: 0.75rem 0 0 0;
              color: var(--muted-color);
              font-size: 1.125rem;
            }

            .card {
              background: white;
              border-radius: var(--border-radius);
              box-shadow: var(--card-shadow);
              border: 1px solid #e2e8f0;
              padding: 2rem;
            }

            .card header {
              margin-bottom: 1.5rem;
            }

            .card header h2, .card header h3 {
              margin: 0;
              font-weight: 600;
              color: #1e293b;
            }

            .card header p {
              margin: 0.5rem 0 0 0;
              color: var(--muted-color);
            }

            .stats-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 1rem;
              margin: 1.5rem 0;
            }

            .stat-card {
              background: #f8fafc;
              padding: 1.25rem;
              border-radius: var(--border-radius);
              text-align: center;
              border: 1px solid #e2e8f0;
              transition: transform 0.2s ease;
            }

            .stat-card:hover {
              transform: translateY(-2px);
            }

            .stat-card h3 {
              margin: 0;
              font-size: 2rem;
              font-weight: 700;
              color: var(--primary);
            }

            .stat-card p {
              margin: 0.5rem 0 0 0;
              color: var(--muted-color);
              font-size: 0.875rem;
              font-weight: 500;
            }

            table {
              margin: 1rem 0;
              box-shadow: var(--card-shadow);
              border: 1px solid #e2e8f0;
              border-radius: var(--border-radius);
              overflow: hidden;
            }

            th {
              background: #f8fafc;
              font-weight: 600;
              color: #1e293b;
            }

            td {
              vertical-align: middle;
            }

            .button-group {
              display: flex;
              gap: 1rem;
              margin: 1.5rem 0;
            }

            button, [role="button"] {
              border-radius: var(--border-radius);
              font-weight: 500;
              transition: all 0.2s ease;
            }

            button:hover, [role="button"]:hover {
              transform: translateY(-1px);
            }

            button[aria-busy="true"] {
              pointer-events: none;
            }

            .input-group {
              display: flex;
              gap: 0.5rem;
            }

            .input-group input {
              flex: 1;
            }

            .help-text {
              font-size: 0.875rem;
              color: var(--muted-color);
              margin: 0.375rem 0;
            }

            details summary {
              font-weight: 500;
              margin-bottom: 1rem;
            }

            progress {
              border-radius: var(--border-radius);
              height: 0.5rem;
            }

            progress:indeterminate {
              background: linear-gradient(
                90deg,
                var(--primary) 0%,
                #dbeafe 50%,
                var(--primary) 100%
              );
              background-size: 200% 100%;
              animation: progress-animation 1.5s infinite linear;
            }

            @keyframes progress-animation {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }

            @media (max-width: 768px) {
              body {
                padding: 1rem;
              }

              .stats-grid {
                grid-template-columns: 1fr;
              }

              .button-group {
                flex-direction: column;
              }
            }
          `}
        </style>
      </head>
      <body>
        <main className="container">
          <header className="app-header">
            <h1>Broken Link Finder</h1>
            <p>Find and fix broken links on your website</p>
          </header>
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
