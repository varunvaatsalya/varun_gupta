import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import resume from "../../data/resume.json";
import { BASE_URL } from "../../lib/site";

export const metadata = {
  title: "Resume",
  description:
    "View the resume of Varun Gupta, full-stack developer from Lucknow, India.",
  alternates: {
    canonical: `${BASE_URL}/resume`,
  },
  openGraph: {
    title: "Resume | Varun Gupta",
    description:
      "View the resume of Varun Gupta, full-stack developer from Lucknow, India.",
    url: `${BASE_URL}/resume`,
    type: "website",
  },
};

export default function ResumePage() {
  return (
    <main
      aria-label="Varun Gupta Resume"
      className="min-h-screen max-w-screen-lg mx-auto px-3 py-4"
    >
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 hover:text-orange-500 hover:underline underline-offset-2"
        >
          <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
          Back to portfolio
        </Link>

        <div className="flex items-center justify-between gap-3 md:contents px-2 md:px-0">
          <h1 className="text-2xl font-bold text-zinc-700 dark:text-zinc-200">
            Resume
          </h1>
          <a
            href={resume.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 hover:text-orange-500 hover:underline underline-offset-2"
            aria-label="Open resume in Google Drive (opens in new tab)"
          >
            Open in Google Drive
            <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="w-full border border-gray-400 dark:border-gray-800 rounded-lg overflow-hidden bg-zinc-200 dark:bg-gray-950 min-h-[80vh]">
        <iframe
          src={resume.cvPreviewUrl}
          title="Varun Gupta Resume"
          className="w-full h-[80vh] border-0"
          allow="autoplay"
        />
      </div>
    </main>
  );
}
