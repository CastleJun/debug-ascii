import { NextRequest, NextResponse } from "next/server";


export default async function middleware(request: NextRequest) {

  const matchedPath = request.headers;
  console.log(JSON.stringify(matchedPath))

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
