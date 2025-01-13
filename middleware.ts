import { NextRequest, NextResponse } from "next/server";


export default async function middleware(request: NextRequest) {
  // 요청 헤더 출력
  console.log('Request Headers:');
  request.headers.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
