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
  import.meta.hot.lastModified = "1741108815603.8262";
}
function ScanResults() {
  _s();
  const {
    scan
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
  const totalLinks = scan.links.length;
  const brokenLinks = scan.links.filter((link) => link.error).length;
  const workingLinks = totalLinks - brokenLinks;
  const completionPercentage = scan.crawledUrls.size / scan.totalUrls * 100;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    width: "100%",
    maxWidth: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 2rem"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Scan Results" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: scan.status === "running" ? "Scanning in progress..." : "Scan completed. Review the results below." }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stats-grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "2rem",
            marginBottom: "0.5rem"
          }, children: "\u{1F517}" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: totalLinks }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total Links" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "2rem",
            marginBottom: "0.5rem"
          }, children: "\u2705" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: workingLinks }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Working Links" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 90,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "2rem",
            marginBottom: "0.5rem"
          }, children: "\u274C" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: brokenLinks }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Broken Links" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "2rem",
            marginBottom: "0.5rem"
          }, children: "\u{1F4CA}" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: [
            Math.round(completionPercentage),
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Scan Progress" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      scan.status === "running" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        marginTop: "2rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Scan Progress" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("progress", { value: completionPercentage, max: "100" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "help-text", children: [
          "Scanning page ",
          scan.crawledUrls.size,
          " of ",
          scan.totalUrls,
          " pages"
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 110,
        columnNumber: 43
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", style: {
      marginBottom: "2rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "button-group", style: {
        justifyContent: "space-between",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          margin: 0
        }, children: "Link Analysis" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this),
        scan.status === "completed" && scan.links.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/scans/${scan.id}/export`, role: "button", className: "outline", style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, void 0, false, {
              fileName: "app/routes/scans.$scanId.tsx",
              lineNumber: 137,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "7 10 12 15 17 10" }, void 0, false, {
              fileName: "app/routes/scans.$scanId.tsx",
              lineNumber: 138,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "12", y1: "15", x2: "12", y2: "3" }, void 0, false, {
              fileName: "app/routes/scans.$scanId.tsx",
              lineNumber: 139,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 136,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Export CSV" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 131,
          columnNumber: 72
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this),
      scan.links.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", style: {
        padding: 0,
        overflow: "hidden"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        overflowX: "auto"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Status" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 155,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "URL" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 156,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Found On" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 157,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Error" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 158,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 154,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 153,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: scan.links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge", style: {
            background: link.error ? "var(--error-color)" : "var(--success-color)",
            color: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "1rem",
            fontSize: "0.875rem",
            fontWeight: "500"
          }, children: link.error ? "Broken" : "Working" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 164,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 163,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
            maxWidth: "300px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", style: {
            color: link.error ? "var(--error-color)" : "var(--primary)",
            textDecoration: "none"
          }, children: link.url }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 181,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 175,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
            maxWidth: "300px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link.foundOn, target: "_blank", rel: "noopener noreferrer", style: {
            textDecoration: "none"
          }, children: link.foundOn }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 194,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 188,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
            maxWidth: "200px",
            color: "var(--muted-color)",
            fontSize: "0.875rem"
          }, children: link.error || "-" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 200,
            columnNumber: 27
          }, this)
        ] }, link.url, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 162,
          columnNumber: 47
        }, this)) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 161,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 152,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 149,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 145,
        columnNumber: 38
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          fontSize: "3rem",
          marginBottom: "1rem"
        }, children: "\u{1F50D}" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 214,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "No Links Found Yet" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 218,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          color: "var(--muted-color)"
        }, children: scan.status === "running" ? "We're currently scanning your website for links..." : "No links were found during the scan." }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 219,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 211,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 121,
      columnNumber: 11
    }, this),
    scan.status === "completed" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card", style: {
      background: "#f0fdf4",
      borderColor: "var(--success-color)",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        fontSize: "3rem",
        marginBottom: "1rem"
      }, children: "\u2728" }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 232,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Scan Completed!" }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 236,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We've finished scanning your website. You can now review all the links above or export them to CSV for further analysis." }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 237,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "button-group", style: {
        justifyContent: "center"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", role: "button", className: "outline", style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M3 12h18M3 6h18M3 18h18" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 250,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 249,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Start New Scan" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 252,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 244,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 241,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 227,
      columnNumber: 43
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/scans.$scanId.tsx",
    lineNumber: 66,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/scans.$scanId.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/scans.$scanId.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s(ScanResults, "okM7znPFsHEXq0S5ws6IUagZM5A=", false, function() {
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
//# sourceMappingURL=/build/routes/scans.$scanId-7FXMRT7B.js.map
