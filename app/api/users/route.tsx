import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  //here we are not using this request: NextRequest in code inside function but if we dont take it as params next will cache data,to prevent caching  we use request object
  return NextResponse.json({
    id: 1,
    name: "sujan",
  });
}
