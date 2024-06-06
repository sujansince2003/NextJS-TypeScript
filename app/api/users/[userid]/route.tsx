import { NextRequest, NextResponse } from "next/server";
import Userschema from "../schema";
import prisma from "@/prisma/client";

export function GET(
  request: NextRequest,
  { params }: { params: { userid: number } }
) {
  if (!params.userid)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({ id: `${params.userid}`, name: "sujan k" });
}

// updating the object :: PUT request

export async function PUT(
  request: NextRequest,
  { params }: { params: { userid: string } }
) {
  const body = await request.json();
  const userid = params.userid;

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
  const user = await prisma.user.findUnique({
    where: {
      id: userid,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User doesnot exist" }, { status: 400 });
  }

  // const updatedUser = await prisma.user.update({
  //   where: {
  //     id: user.id,
  //   },
  //   data: {
  //     username: body.username,
  //   },
  // });
  return NextResponse.json(user);
}

//deleting the object

export async function DELETE(
  request: NextRequest,
  { params }: { params: { userid: string } }
) {
  const body = await request.json();
  const userid = params.userid;
  if (!userid) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userid,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "user doesnot exist" }, { status: 400 });
  }

  const deleteduser = await prisma.user.delete({
    where: {
      id: user.id,
    },
  });
  return NextResponse.json(
    { success: "object deleted succesfully", data: deleteduser },
    { status: 200 }
  );
}
