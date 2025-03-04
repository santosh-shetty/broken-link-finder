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
  import.meta.hot.lastModified = "1741109869854.5845";
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
  const links = scan.links || [];
  const totalLinks = links.length;
  const brokenLinks = links.filter((link) => link.error).length;
  const workingLinks = totalLinks - brokenLinks;
  const crawledUrls = scan.crawledUrls || /* @__PURE__ */ new Set();
  const totalUrls = scan.totalUrls || 0;
  const completionPercentage = totalUrls > 0 ? crawledUrls.size / totalUrls * 100 : 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    width: "100%",
    maxWidth: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 2rem"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "2rem"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card", style: {
      maxWidth: "800px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { style: {
        marginBottom: "2rem",
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Scan Results" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          color: "var(--muted-color)"
        }, children: scan.status === "running" ? "Scanning in progress... Results will update automatically." : "Scan completed. Review the results below." }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stats-grid", style: {
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1.5rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "2.5rem",
            marginBottom: "1rem"
          }, children: "\u{1F517}" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: totalLinks }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total Links" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "2.5rem",
            marginBottom: "1rem"
          }, children: "\u2705" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: workingLinks }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Working Links" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "2.5rem",
            marginBottom: "1rem"
          }, children: "\u274C" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: brokenLinks }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Broken Links" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "2.5rem",
            marginBottom: "1rem"
          }, children: "\u{1F4CA}" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: [
            Math.round(completionPercentage),
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Scan Progress" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this),
      scan.status === "running" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        marginTop: "2rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
          display: "block",
          marginBottom: "0.5rem"
        }, children: "Scan Progress" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("progress", { value: completionPercentage, max: "100", style: {
          width: "100%"
        } }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "help-text", style: {
          display: "block",
          marginTop: "0.5rem",
          textAlign: "center",
          color: "var(--muted-color)"
        }, children: [
          "Scanning page ",
          crawledUrls.size,
          " of ",
          totalUrls,
          " pages"
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 140,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 130,
        columnNumber: 43
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", style: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: "2rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "button-group", style: {
        justifyContent: "space-between",
        alignItems: "center",
        margin: "2rem 0"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          margin: 0
        }, children: "Link Analysis" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this),
        scan.status === "completed" && links.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/scans/${scan.id}/export`, role: "button", className: "outline", style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, void 0, false, {
              fileName: "app/routes/scans.$scanId.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "7 10 12 15 17 10" }, void 0, false, {
              fileName: "app/routes/scans.$scanId.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "12", y1: "15", x2: "12", y2: "3" }, void 0, false, {
              fileName: "app/routes/scans.$scanId.tsx",
              lineNumber: 172,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 169,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Export CSV" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 174,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 164,
          columnNumber: 67
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 156,
        columnNumber: 13
      }, this),
      links.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", style: {
        padding: 0,
        overflow: "hidden"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        overflowX: "auto"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: {
            width: "100px"
          }, children: "Status" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 188,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "URL" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 191,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Found On" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 192,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: {
            width: "200px"
          }, children: "Error" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 193,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 187,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 186,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: links.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge", style: {
            background: link.error ? "var(--error-color)" : "var(--success-color)",
            color: "white",
            padding: "0.25rem 0.75rem",
            borderRadius: "1rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            display: "inline-block"
          }, children: link.error ? "Broken" : "Working" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 201,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 200,
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
          }, title: link.url, children: link.url }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 219,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 213,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
            maxWidth: "300px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link.foundOn, target: "_blank", rel: "noopener noreferrer", style: {
            textDecoration: "none"
          }, title: link.foundOn, children: link.foundOn }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 232,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 226,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
            maxWidth: "200px",
            color: "var(--muted-color)",
            fontSize: "0.875rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, title: link.error, children: link.error || "-" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 238,
            columnNumber: 27
          }, this)
        ] }, `${link.url}-${index}`, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 199,
          columnNumber: 51
        }, this)) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 198,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 185,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 182,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 178,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card", style: {
        textAlign: "center",
        padding: "3rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          fontSize: "3rem",
          marginBottom: "1rem"
        }, children: "\u{1F50D}" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 256,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "No Links Found Yet" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 260,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          color: "var(--muted-color)",
          maxWidth: "400px",
          margin: "1rem auto"
        }, children: scan.status === "running" ? "We're currently scanning your website for links. Results will appear here as they're found." : "No links were found during the scan. This might indicate an issue accessing your website." }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 261,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 252,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 151,
      columnNumber: 11
    }, this),
    scan.status === "completed" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card", style: {
      background: "#f0fdf4",
      borderColor: "var(--success-color)",
      textAlign: "center",
      maxWidth: "800px",
      margin: "2rem auto"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        fontSize: "3rem",
        marginBottom: "1rem"
      }, children: "\u2728" }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 278,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Scan Completed!" }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 282,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        color: "var(--muted-color)",
        maxWidth: "500px",
        margin: "1rem auto"
      }, children: "We've finished scanning your website. You can now review all the links above or export them to CSV for further analysis." }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 283,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "button-group", style: {
        justifyContent: "center",
        marginTop: "1.5rem"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", role: "button", className: "outline", style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M3 12h18M3 6h18M3 18h18" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 301,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 300,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Start New Scan" }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 303,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 295,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 291,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 271,
      columnNumber: 43
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/scans.$scanId.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/scans.$scanId.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/scans.$scanId.tsx",
    lineNumber: 62,
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
//# sourceMappingURL=/build/routes/scans.$scanId-SNXUWHVP.js.map
