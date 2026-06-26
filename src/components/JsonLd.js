/**
 * JSON-LD Structured Data Component (Server Component)
 * Implements schema.org: Person, WebSite, WebPage
 * @see https://schema.org/Person
 * @see https://schema.org/WebSite
 * @see https://schema.org/WebPage
 */

const BASE_URL = "https://varunvaatsalya.me";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Varun Gupta",
  alternateName: "@varunvaatsalya",
  url: BASE_URL,
  image: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/profile.jpg`,
    width: 800,
    height: 800,
  },
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer specialising in backend engineering. Experienced in Node.js, Express, Next.js, MongoDB, PostgreSQL, Docker and more. Based in Lucknow, India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institute of Engineering & Technology, Lucknow",
    url: "https://ietlucknow.ac.in",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Python",
    "Django",
    "Socket.io",
    "Full-Stack Web Development",
    "Backend Engineering",
  ],
  sameAs: [
    "https://github.com/varunvaatsalya",
    "https://www.linkedin.com/in/varunvaatsalya/",
    "https://twitter.com/varunvaatsalya",
    "https://www.instagram.com/varunvaatsalya/",
    "https://www.fiverr.com/s/8z5y2Y4",
  ],
  email: "varunvaatsalya@gmail.com",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Varun Gupta – Portfolio",
  url: BASE_URL,
  description:
    "Official portfolio and personal website of Varun Gupta, full-stack developer from Lucknow, India.",
  inLanguage: "en",
  author: {
    "@id": `${BASE_URL}/#person`,
  },
  copyrightYear: 2024,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Varun Gupta – Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of Varun Gupta, a full-stack developer from Lucknow, India. View projects, skills, education and get in touch.",
  inLanguage: "en",
  isPartOf: {
    "@id": `${BASE_URL}/#website`,
  },
  about: {
    "@id": `${BASE_URL}/#person`,
  },
  mainEntity: {
    "@id": `${BASE_URL}/#person`,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
    </>
  );
}
