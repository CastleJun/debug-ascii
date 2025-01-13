import { NextRequest, NextResponse } from "next/server";


export default async function middleware(request: NextRequest) {
  // x-matched-path 헤더만 출력
  const matchedPath = request.headers.get('x-matched-path');
  console.log('x-matched-path:', matchedPath);

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
