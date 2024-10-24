// lib/contentful.js
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT, // default 'master'
});

export async function fetchEntries() {
  const entries = await client.getEntries({
    content_type: "blogPost", // Replace with your Contentful content type ID
  });
  if (entries.items) return entries.items;
  console.log(`Error fetching entries.`);
}
