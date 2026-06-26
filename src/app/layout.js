import { Roboto } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
  display: "optional", // performance: avoids invisible text during font load
  preload: true,
});

const BASE_URL = "https://varunvaatsalya.me";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    template: "%s | Varun Gupta",
    default: "Varun Gupta – Full-Stack Developer",
  },
  description:
    "Portfolio of Varun Gupta, a full-stack developer specialising in backend engineering. Expert in Node.js, Express, Next.js, MongoDB, PostgreSQL, Docker and React. Based in Lucknow, India.",
  keywords: [
    "Varun Gupta",
    "varunvaatsalya",
    "Full-Stack Developer",
    "Backend Developer",
    "Node.js Developer",
    "Next.js Developer",
    "React Developer",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "Docker",
    "Python",
    "Django",
    "Lucknow",
    "India",
    "Freelance Developer",
    "Portfolio",
    "IET Lucknow",
  ],
  authors: [{ name: "Varun Gupta", url: BASE_URL }],
  creator: "Varun Gupta",
  publisher: "Varun Gupta",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Varun Gupta – Portfolio",
    title: "Varun Gupta – Full-Stack Developer",
    description:
      "Explore the portfolio of Varun Gupta, a full-stack developer from Lucknow, India. View his projects, skills, and get in touch.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Varun Gupta – Full-Stack Developer",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Varun Gupta – Full-Stack Developer",
    description:
      "Explore the portfolio of Varun Gupta, a full-stack developer from Lucknow, India.",
    creator: "@varunvaatsalya",
    site: "@varunvaatsalya",
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Varun Gupta – Full-Stack Developer",
      },
    ],
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Performance: preconnect to Google Fonts (already used via next/font, but belt-and-suspenders) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for external services linked from the portfolio */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://www.fiverr.com" />
        <link rel="dns-prefetch" href="https://drive.google.com" />
      </head>
      <body className={roboto.className + " bg-zinc-300 dark:bg-black"}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
