/**
 * Web App Manifest for Varun Gupta's Portfolio
 * Auto-generated via Next.js Metadata API (App Router)
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
 */

/** @returns {import('next').MetadataRoute.Manifest} */
export default function manifest() {
  return {
    name: "Varun Gupta – Full-Stack Developer Portfolio",
    short_name: "Varun Gupta",
    description:
      "Portfolio of Varun Gupta, a full-stack developer specialising in backend engineering, based in Lucknow, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#ec4899",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/profilelogo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["portfolio", "developer", "technology"],
    lang: "en",
  };
}
