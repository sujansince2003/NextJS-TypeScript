import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { userid: number } }
) {
  if (params.userid > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({ id: `${params.userid}`, name: "sujan k" });
}

// updating the object :: PUT request

export async function PUT(
  request: NextRequest,
  { params }: { params: { userid: number } }
) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  if (params.userid > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: "hello sujan" });
}

//deleting the object

export async function DELETE(
  request: NextRequest,
  { params }: { params: { userid: number } }
) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json(
      { error: "sorry name is required" },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { success: "object deleted succesfully" },
    { status: 200 }
  );
}
