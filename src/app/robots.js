import { BASE_URL } from "../lib/site";
/**
 * robots.txt for Varun Gupta's Portfolio
 * Auto-generated via Next.js Metadata API (App Router)
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */


/** @returns {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
