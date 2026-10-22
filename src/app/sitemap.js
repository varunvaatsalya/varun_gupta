/**
 * Sitemap for Varun Gupta's Portfolio
 * Auto-generated via Next.js Metadata API (App Router)
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import projectsData from "../data/projects.json";
import { BASE_URL } from "../lib/site";


/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hire`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectsData.caseStudies.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    })),
  ];
}
