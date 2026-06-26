"use client";

import { useEffect, useMemo, useState } from "react";

const ranges = [
  { label: "Last 7 days", value: 7 },
  { label: "Last 14 days", value: 14 },
  { label: "Last month", value: 30 },
  { label: "Last 2 months", value: 60 },
];

function formatLabel(label) {
  return label.slice(5); // YYYY-MM-DD -> MM-DD
}

export default function AnalyticsPanel() {
  const [range, setRange] = useState(7);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError("");

    fetch(`/api/admin/summary?range=${range}`, {
      headers: { "Accept": "application/json" },
      cache: "no-store",
    })
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json?.message || "Failed to load analytics");
        }
        if (mounted) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [range]);

  const maxCount = useMemo(() => {
    if (!data?.counts) return 0;
    return Math.max(...data.counts, 1);
  }, [data]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Click analytics</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Track redirect clicks over time and switch between periods.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {ranges.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setRange(option.value)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                range === option.value
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
            Loading analytics...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
            {error}
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              <div className="rounded-2xl bg-gray-50 p-4 dark:bg-zinc-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">Selected period</p>
                <p className="mt-2 text-xl font-semibold">{range} days</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-4 dark:bg-zinc-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">Total clicks</p>
                <p className="mt-2 text-xl font-semibold">{data.totalClicks}</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-4 dark:bg-zinc-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">Any activity?</p>
                <p className="mt-2 text-xl font-semibold">{data.totalClicks > 0 ? "Yes" : "No"}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-zinc-950">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Daily clicks</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{data.range}-day progress</p>
                </div>
                <div className="flex items-end gap-2 overflow-x-auto pb-2">
                  {data.labels.map((label, index) => {
                    const value = data.counts[index] ?? 0;
                    const height = Math.max(4, Math.round((value / maxCount) * 120));
                    return (
                      <div key={label} className="flex flex-col items-center gap-2 text-center text-[10px] text-gray-500 dark:text-gray-400">
                        <div className="flex h-28 items-end w-7">
                          <div className="w-full rounded-t-xl bg-orange-500" style={{ height: `${height}px` }} />
                        </div>
                        <div className="w-7 break-words">{formatLabel(label)}</div>
                        <div className="text-xs text-gray-700 dark:text-gray-300">{value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-zinc-950">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Top redirects in this period</h3>
                {data.topLinks.length === 0 ? (
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">No redirects recorded yet.</p>
                ) : (
                  <div className="mt-4 grid gap-3">
                    {data.topLinks.map((item) => (
                      <div key={item._id} className="rounded-2xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-800 dark:bg-zinc-900">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-medium">/{item._id}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.title || item._id}</p>
                          </div>
                          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900 dark:text-orange-200">
                            {item.visits} clicks
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
