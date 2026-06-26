import Main from "../components/Main";
import CoMain from "../components/CoMain";

const BASE_URL = "https://varunvaatsalya.vercel.app";

// Static metadata export (preferred for static pages in App Router)
export const metadata = {
  title: "Varun Gupta – Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of Varun Gupta, a full-stack developer from Lucknow, India. Skilled in Node.js, Express, Next.js, React, MongoDB, PostgreSQL, Docker and more. Available for freelance projects.",
  keywords: [
    "Varun Gupta portfolio",
    "Full-Stack Developer India",
    "Backend Developer Lucknow",
    "Node.js freelancer",
    "Next.js developer",
    "React developer India",
    "hire full-stack developer",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Varun Gupta – Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Varun Gupta, a full-stack developer from Lucknow, India. View projects including ENCORE, E-CELL, Audiometer and more.",
    url: BASE_URL,
    type: "profile",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Varun Gupta – Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Gupta – Full-Stack Developer Portfolio",
    description:
      "Full-stack developer from Lucknow, India. Expert in Node.js, Next.js, React, MongoDB, Docker and more.",
    images: ["/images/profile.jpg"],
  },
};

export default function Home() {
  return (
    <main aria-label="Varun Gupta Portfolio">
      <div
        className={
          "max-w-screen-lg max-md:mx-auto flex items-start gap-3 my-1 mx-auto"
        }
      >
        <div className="w-[98%] lg:w-3/4 mx-auto">
          <Main />
        </div>
        <aside
          className="sticky top-2 my-2 w-1/4 max-lg:hidden"
          aria-label="Sidebar – Freelancing and CV"
        >
          <CoMain />
        </aside>
      </div>
    </main>
  );
}
