import { NextRequest, NextResponse } from "next/server";
import Userschema from "./schema";

export function GET(request: NextRequest) {
  //here we are not using this request: NextRequest in code inside function but if we dont take it as params next will cache data,to prevent caching  we use request object
  return NextResponse.json({
    id: 1,
    name: "sujan",
  });
}

//creating POST request

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "name is requierd" }, { status: 401 });
  return NextResponse.json(body);
}
