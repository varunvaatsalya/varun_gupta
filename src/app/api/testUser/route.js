let array = [
  {
    name: {
      first: "ankush",
      middle: "kumar",
      last: "chamar",
    },
    age: 65,
    isMature: false,
    greet: "hey ankush",
  },
  {
    name: {
      first: "sidhant",
      middle: "kumar",
      last: "chamar",
    },
    age: 25,
    isMature: true,
    greet: "hey shiddu",
  },
  {
    name: {
      first: "varun",
      middle: "kumar",
      last: "gupta",
    },
    age: 15,
    isMature: true,
    greet: "hey varun",
  },
];

import { NextResponse } from "next/server";

export function GET() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber <= 5) {
    return NextResponse.json(
      { success: false, message: "Random failure occurred." },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { success: true, data: array, message: "Data Fetched Successfully!" },
    { status: 200 }
  );
}
