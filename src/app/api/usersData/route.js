import { NextResponse } from "next/server";

export function GET(Request){
    return NextResponse.json({data:true},{status:200})
} 