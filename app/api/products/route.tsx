import { NextRequest, NextResponse } from "next/server";
import Productschema from "./schema";

export function GET(request: NextRequest) {
  const obj = [
    {
      id: "milk",
    },
    {
      id: "milk xd",
    },
  ];

  return NextResponse.json(obj);
}

// creating post

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = Productschema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json(body, { status: 200 });
}
