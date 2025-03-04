import { type LoaderFunctionArgs } from "@remix-run/node";
import { getBrokenLinks, getScan } from "~/models/scan.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const scan = getScan(params.scanId!);
  if (!scan) {
    throw new Response("Not Found", { status: 404 });
  }

  const brokenLinks = getBrokenLinks(scan.id);
  
  // Create CSV content
  const csvContent = [
    ["URL", "Source Page", "Status Code", "Error"].join(","),
    ...brokenLinks.map((link) => [
      `"${link.url}"`,
      `"${link.sourceUrl}"`,
      link.statusCode || "",
      `"${link.error || ""}"`,
    ].join(",")),
  ].join("\n");

  return new Response(csvContent, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="broken-links-${scan.id}.csv"`,
    },
  });
}
