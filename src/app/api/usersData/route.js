import { NextResponse } from "next/server";

export function GET(Request){
    return NextResponse.json({data:false},{status:200})
} 