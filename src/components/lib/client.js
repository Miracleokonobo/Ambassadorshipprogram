import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "4zw2ydao",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
