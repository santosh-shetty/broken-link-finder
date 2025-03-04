import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { z } from "zod";
import { createScan } from "~/models/scan.server";
import { crawlWebsite } from "~/services/linkChecker.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Broken Link Finder" },
    { name: "description", content: "Find broken links on your website" },
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
    <div>
      <Form method="post" className="grid gap-4">
        <div className="grid">
          <label htmlFor="url">Website URL</label>
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
          {actionData?.errors?.url && (
            <small id="url-error" className="text-red-600">
              {actionData.errors.url}
            </small>
          )}
        </div>

        <div className="grid">
          <label htmlFor="maxDepth">Maximum Crawl Depth</label>
          <input
            type="number"
            id="maxDepth"
            name="maxDepth"
            required
            min="1"
            max="10"
            defaultValue="3"
            aria-invalid={actionData?.errors?.maxDepth ? true : undefined}
            aria-errormessage={
              actionData?.errors?.maxDepth ? "maxDepth-error" : undefined
            }
          />
          {actionData?.errors?.maxDepth && (
            <small id="maxDepth-error" className="text-red-600">
              {actionData.errors.maxDepth}
            </small>
          )}
          <small>How deep should we crawl? (1-10)</small>
        </div>

        <button type="submit" aria-busy={isSubmitting}>
          {isSubmitting ? "Starting Scan..." : "Start Scan"}
        </button>
      </Form>

      {actionData?.scanId && (
        <article className="mt-4">
          <header>Scan Started!</header>
          <p>
            Your scan has been started. View the results at:{" "}
            <a href={`/scans/${actionData.scanId}`}>Scan Results</a>
          </p>
        </article>
      )}
    </div>
  );
}
