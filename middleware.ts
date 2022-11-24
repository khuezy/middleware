import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('~~path: ', request.nextUrl.pathname)
  console.log('~~url: ', request.url)
  
  if (request.nextUrl.pathname === '/about') {
    console.log('~~about redirect!')
    return NextResponse.redirect(new URL('/redirected', request.url))
  }
  if (request.nextUrl.pathname === '/another') {
    return NextResponse.rewrite(new URL('/rewrite', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/about/:path*', '/another/:path*'],
}
