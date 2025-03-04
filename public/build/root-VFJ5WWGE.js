import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-X6J6BJNX.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-46BGU3U5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: "https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", "data-theme": "light", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Broken Link Finder" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
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
          ` }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "app-header", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Broken Link Finder" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 242,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Find and fix broken links on your website" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 243,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this),
        children
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Layout;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 254,
    columnNumber: 10
  }, this);
}
_c2 = App;
var _c;
var _c2;
$RefreshReg$(_c, "Layout");
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  App as default,
  links
};
//# sourceMappingURL=/build/root-VFJ5WWGE.js.map
