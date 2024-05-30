import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { userid: number } }
) {
  if (params.userid > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({ id: `${params.userid}`, name: "sujan k" });
}
