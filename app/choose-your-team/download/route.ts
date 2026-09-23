import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const APP_STORE_URL = 'https://apps.apple.com/app/id6756816697'
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.doncarlos.chooseyourteam'

function getDestination(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') ?? ''

  if (/android/i.test(userAgent)) {
    return PLAY_STORE_URL
  }

  if (/(iphone|ipad|ipod)/i.test(userAgent)) {
    return APP_STORE_URL
  }

  if (/macintosh.*mobile/i.test(userAgent)) {
    return APP_STORE_URL
  }

  return new URL('/choose-your-team', request.url)
}

export function GET(request: NextRequest) {
  const response = NextResponse.redirect(getDestination(request), 307)

  response.headers.set('Cache-Control', 'private, no-store')
  response.headers.append('Vary', 'User-Agent')

  return response
}
