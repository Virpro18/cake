import { updateSession } from '@/libs/supabase/middleware'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  return updateSession(request)
}

// Tentukan path yang akan diperiksa
export const config = {
  matcher: ['/profile/:path*'], // Middleware hanya berlaku untuk /dashboard
}
