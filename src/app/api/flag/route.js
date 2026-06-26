import { NextResponse } from "next/server";

export function GET(Request) {
  let by = Request.nextUrl.searchParams.get("by");
  let from = Request.nextUrl.searchParams.get("from");
  console.log(by, from);
  return NextResponse.json({ by, from, success:true }, { status: 200 });
}
