import { NextResponse } from "next/server";

export function GET(Request){
    return NextResponse.json({name:'Varun Gupta'},{status:200})
} 