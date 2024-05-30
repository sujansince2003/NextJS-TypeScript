import { NextRequest, NextResponse } from "next/server";
import Userschema from "../schema";

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

  const validation = Userschema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });

    /**
     validation.error.errors returns array like this
     [
    {
        "code": "too_small",
        "minimum": 3,
        "type": "string",
        "inclusive": true,
        "exact": false,
        "message": "String must contain at least 3 character(s)",
        "path": [
            "name"
        ]
    }
]
     */
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
