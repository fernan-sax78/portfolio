import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
 
 const nextCreateMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es' , 'it'],
 
  // Used when no locale matches
  defaultLocale: 'it'
});

export default function (req : NextRequest): NextResponse {
    return nextCreateMiddleware(req) ;
}

export const config = {
    matcher : ['/((?!api|static|.*\\..*|_next).*)' , '/' , '/(en|es|it)/:path*'],
}