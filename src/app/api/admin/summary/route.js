import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAdminToken } from "@/lib/auth";
import { connectMongo } from "@/lib/mongoose";
import RedirectEvent from "@/models/RedirectEvent";

function parseRange(value) {
  const allowed = [7, 14, 30, 60];
  const parsed = Number(value);
  return allowed.includes(parsed) ? parsed : 7;
}

function buildDays(range) {
  const days = [];
  const now = new Date();
  const day = new Date(now);
  day.setUTCHours(0, 0, 0, 0);

  for (let i = range - 1; i >= 0; i -= 1) {
    const date = new Date(day);
    date.setUTCDate(date.getUTCDate() - i);
    days.push(date.toISOString().slice(0, 10));
  }

  return days;
}

export async function GET(request) {
  const token = cookies().get("adminSession")?.value ?? null;
  if (!token || !verifyAdminToken(token)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  await connectMongo();

  const range = parseRange(request.nextUrl.searchParams.get("range"));
  const days = buildDays(range);
  const startDate = new Date(days[0]);
  startDate.setUTCHours(0, 0, 0, 0);

  const aggregation = await RedirectEvent.aggregate([
    { $match: { createdAt: { $gte: startDate } } },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt", timezone: "UTC" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  const countsByDay = days.map((dayLabel) => {
    const match = aggregation.find((item) => item._id === dayLabel);
    return match ? match.count : 0;
  });

  const topLinks = await RedirectEvent.aggregate([
    { $match: { createdAt: { $gte: startDate } } },
    {
      $group: {
        _id: "$slug",
        visits: { $sum: 1 },
        target: { $first: "$target" },
        title: { $first: "$linkTitle" },
      },
    },
    { $sort: { visits: -1 } },
    { $limit: 6 },
  ]);

  return NextResponse.json({
    success: true,
    range,
    labels: days,
    counts: countsByDay,
    totalClicks: countsByDay.reduce((sum, value) => sum + value, 0),
    topLinks,
  });
}
