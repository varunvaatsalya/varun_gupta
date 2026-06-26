import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connectMongo } from "@/lib/mongoose";
import { verifyAdminToken } from "@/lib/auth";
import links from "@/data/links.json";
import RedirectEvent from "@/models/RedirectEvent";
import AnalyticsPanel from "@/components/AnalyticsPanel";

export default async function AdminPage() {
  const token = cookies().get("adminSession")?.value ?? null;
  if (!token || !verifyAdminToken(token)) {
    redirect("/na/login");
  }

  await connectMongo();
  const totalRedirects = await RedirectEvent.countDocuments();
  const totalLinks = links.length;
  const uniqueVisitors = await RedirectEvent.distinct("ip").then((items) => items.length);
  const topLinks = await RedirectEvent.aggregate([
    {
      $group: {
        _id: "$slug",
        count: { $sum: 1 },
        target: { $first: "$target" },
        title: { $first: "$linkTitle" },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 6 },
  ]);
  const recentEvents = await RedirectEvent.find()
    .sort({ createdAt: -1 })
    .limit(8)
    .lean();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Admin Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold">Analytics & Redirects</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
              Monitor redirect activity, view top shared links, and track usage across your portfolio redirect service.
            </p>
          </div>
          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            >
              Logout
            </button>
          </form>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
            <p className="text-sm text-gray-500">Total redirects</p>
            <p className="mt-3 text-4xl font-semibold">{totalRedirects}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
            <p className="text-sm text-gray-500">Tracked links</p>
            <p className="mt-3 text-4xl font-semibold">{totalLinks}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
            <p className="text-sm text-gray-500">Unique visitors</p>
            <p className="mt-3 text-4xl font-semibold">{uniqueVisitors}</p>
          </div>
        </div>

        <AnalyticsPanel />

        <section className="grid gap-6 lg:grid-cols-2 my-8">
          <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
            <h2 className="text-lg font-semibold">Top redirect links</h2>
            <div className="mt-4 space-y-3">
              {topLinks.length === 0 ? (
                <p className="text-sm text-gray-500">No redirect activity yet.</p>
              ) : (
                topLinks.map((link) => (
                  <div key={link._id} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-zinc-950">
                    <p className="font-medium">/{link._id}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{link.title || link._id}</p>
                    <p className="mt-2 text-sm text-orange-500">{link.count} visits</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
            <h2 className="text-lg font-semibold">Latest events</h2>
            <div className="mt-4 space-y-3">
              {recentEvents.length === 0 ? (
                <p className="text-sm text-gray-500">No events recorded yet.</p>
              ) : (
                recentEvents.map((event) => (
                  <div key={event._id} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-zinc-950">
                    <p className="font-medium">/{event.slug}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{event.linkTitle}</p>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{new Date(event.createdAt).toLocaleString()}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold">Redirect collection</h2>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Redirect slugs are stored in JSON and tracked in MongoDB for analytics.
          </p>
        </section>
      </div>
    </main>
  );
}
