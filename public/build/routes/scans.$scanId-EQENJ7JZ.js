import {
  require_node,
  require_scan
} from "/build/_shared/chunk-N6XCFVRO.js";
import {
  useLoaderData,
  useRevalidator
} from "/build/_shared/chunk-X6J6BJNX.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-46BGU3U5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/scans.$scanId.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_scan = __toESM(require_scan(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/scans.$scanId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/scans.$scanId.tsx"
  );
  import.meta.hot.lastModified = "1741107824068.3984";
}
function ScanResults() {
  _s();
  const {
    scan,
    links,
    brokenLinks
  } = useLoaderData();
  const revalidator = useRevalidator();
  (0, import_react2.useEffect)(() => {
    if (scan.status === "running") {
      const timer = setInterval(() => {
        revalidator.revalidate();
      }, 2e3);
      return () => clearInterval(timer);
    }
  }, [scan.status, revalidator]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Scan Results" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Status: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `badge ${scan.status}`, children: scan.status }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 65,
            columnNumber: 22
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stats-grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: scan.totalLinks }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total Links" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: scan.brokenLinks }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Broken Links" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: scan.maxDepth }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Max Depth" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Website:" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 84,
            columnNumber: 14
          }, this),
          " ",
          scan.url
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Started:" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 85,
            columnNumber: 14
          }, this),
          " ",
          new Date(scan.startedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        scan.completedAt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Completed:" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 86,
            columnNumber: 35
          }, this),
          " ",
          new Date(scan.completedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 86,
          columnNumber: 32
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    scan.status === "running" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card", role: "alert", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Scanning in progress... The results will update automatically." }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("progress", {}, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 90,
      columnNumber: 37
    }, this),
    brokenLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Broken Links Found" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "We found ",
          brokenLinks.length,
          " broken links on your website"
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { role: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Broken Link" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Source Page" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Status" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Error" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 110,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: brokenLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "link", children: link.url }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 116,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 115,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link.sourceUrl, target: "_blank", rel: "noopener noreferrer", className: "link", children: link.sourceUrl }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 121,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 120,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge error", children: link.statusCode || "Error" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 126,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 125,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: link.error || "HTTP " + link.statusCode }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 130,
            columnNumber: 21
          }, this)
        ] }, link.id, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 114,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 97,
      columnNumber: 34
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "button-group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", role: "button", className: "secondary", children: "New Scan" }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      scan.status === "completed" && brokenLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/scans/${scan.id}/export`, role: "button", download: "broken-links.csv", children: "Export Results (CSV)" }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 141,
        columnNumber: 67
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
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
        ` }, void 0, false, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/scans.$scanId.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(ScanResults, "rWi+KvUnHrLYCw4p2QlWMGcoqUc=", false, function() {
  return [useLoaderData, useRevalidator];
});
_c = ScanResults;
var _c;
$RefreshReg$(_c, "ScanResults");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ScanResults as default
};
//# sourceMappingURL=/build/routes/scans.$scanId-EQENJ7JZ.js.map
