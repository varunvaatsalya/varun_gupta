import { NextResponse } from "next/server";

let flag = true;
export function GET(Request) {
  let update = Request.nextUrl.searchParams.get("update");
  if (update == "1") flag = !flag;
  return NextResponse.json({ flag: flag, success:true }, { status: 200 });
}
