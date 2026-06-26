import { NextResponse } from "next/server";
import { createAdminToken, verifyAdminCredentials } from "@/lib/auth";

export async function POST(request) {
  const body = await request.json();
  const email = body?.email?.toString()?.trim() ?? "";
  const password = body?.password?.toString() ?? "";

  if (!verifyAdminCredentials(email, password)) {
    return NextResponse.json(
      { success: false, message: "Invalid admin credentials." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true, message: "Logged in." });
  response.cookies.set("adminSession", createAdminToken(), {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
  });
  return response;
}
