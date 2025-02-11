import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { access_token } = await req.json();

  if (!access_token) {
    return NextResponse.json({ error: "Token tidak ditemukan" }, { status: 400 });
  }

  // Simpan token di cookie
  (await cookies()).set("sb-access-token", access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
    path: "/",
  });

  return NextResponse.json({ message: "Login berhasil" });
}
