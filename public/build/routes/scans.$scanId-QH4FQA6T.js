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
  import.meta.hot.lastModified = "1741105028185.6074";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
        "Scan Status: ",
        scan.status
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "URL: ",
          scan.url
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Total Links: ",
          scan.totalLinks
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Broken Links: ",
          scan.brokenLinks
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        scan.completedAt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Completed:",
          " ",
          new Date(scan.completedAt).toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 70,
          columnNumber: 32
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    brokenLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Broken Links" }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "URL" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 85,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Source Page" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Status" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Error" }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: brokenLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", children: link.url }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 94,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 93,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link.sourceUrl, target: "_blank", rel: "noopener noreferrer", children: link.sourceUrl }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 99,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 98,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: link.statusCode }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 103,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: link.error }, void 0, false, {
            fileName: "app/routes/scans.$scanId.tsx",
            lineNumber: 104,
            columnNumber: 21
          }, this)
        ] }, link.id, true, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 92,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/routes/scans.$scanId.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/scans.$scanId.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 77,
      columnNumber: 34
    }, this),
    scan.status === "completed" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/scans/${scan.id}/export`, className: "button", download: "broken-links.csv", children: "Export Results (CSV)" }, void 0, false, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/scans.$scanId.tsx",
      lineNumber: 111,
      columnNumber: 39
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
//# sourceMappingURL=/build/routes/scans.$scanId-QH4FQA6T.js.map
