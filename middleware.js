import { NextResponse } from 'next/server'

export function middleware(request) {
  const session = request.cookies.get('balam_session')
  const { pathname } = request.nextUrl

  // Si va al dashboard sin sesión, redirige al login
  if (pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Si ya tiene sesión y va al login, redirige al dashboard
  if (pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
}