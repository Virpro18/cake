import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Fungsi asinkron untuk memperbarui sesi pengguna
export async function updateSession(request: NextRequest) {
  // Membuat respons awal dengan request yang diterima
  let supabaseResponse = NextResponse.next({ request })

  // Membuat instance Supabase client dengan URL dan kunci anon dari environment variables
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // URL Supabase dari environment variable
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // Kunci anon Supabase dari environment variable
    {
      // Mengatur cookies untuk Supabase client
      cookies: {
        // Mendapatkan semua cookies dari request
        getAll: () => request.cookies.getAll(),
        // Mengatur semua cookies yang perlu di-set
        setAll: (cookiesToSet) => {
          // Mengatur cookies pada request
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          // Memperbarui respons dengan request yang telah diubah
          supabaseResponse = NextResponse.next({ request })
          // Mengatur cookies pada respons
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Mendapatkan data pengguna dari Supabase
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Jika pengguna tidak ada dan URL tidak dimulai dengan '/login', redirect ke halaman login
  if (!user && !request.nextUrl.pathname.startsWith('/account/login')) {
    const url = request.nextUrl.clone()
    url.pathname = '/account/login'
    return NextResponse.redirect(url)
  }

  // Mengembalikan respons Supabase yang telah diperbarui
  return supabaseResponse
}