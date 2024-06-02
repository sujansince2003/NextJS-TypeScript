import { NextRequest, NextResponse } from "next/server";
import Productschema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  let data;
  try {
    data = await prisma.product.findMany();
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to retrieve products" },
      { status: 500 }
    );
  }
  if (data.length === 0) {
    return NextResponse.json({ error: "data is empty" }, { status: 204 });
  }

  return NextResponse.json(data, { status: 200 });
}

// creating post

export async function POST(request: NextRequest) {
  const body = await request.json();
  // const validation = Productschema.safeParse(body);
  // if (!validation.success) {
  //   return NextResponse.json(validation.error.errors, { status: 400 });
  // }

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(product, { status: 200 });
}
