import { NextRequest, NextResponse } from "next/server";
import Userschema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const data = await prisma.user.findMany();

  //here we are not using this request: NextRequest in code inside function but if we dont take it as params next will cache data,to prevent caching  we use request object
  return NextResponse.json(data);
}

//creating POST request

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!(body.email && body.username))
    return NextResponse.json({ error: "name is requierd" }, { status: 401 });

  const existingUseremail = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  const existingUserusername = await prisma.user.findUnique({
    where: {
      email: body.username,
    },
  });

  if (existingUseremail || existingUserusername) {
    return NextResponse.json(
      { error: "username or email is already taken" },
      { status: 400 }
    );
  }

  // const user = await prisma.user.create({
  //   data: {
  //     username: body.username,
  //     email: body.email,
  //   },
  // });
  return NextResponse.json({ error: "no user obj" });
}
