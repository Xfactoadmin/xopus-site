import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Middleware léger pour xopus-site (site vitrine).
 * Pas d'auth requise — uniquement refresh session Supabase si présente
 * et redirection www → non-www.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  /* ── Redirection www → non-www ── */
  const host = request.headers.get("host") ?? "";
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.hostname = host.replace("www.", "");
    return NextResponse.redirect(url, { status: 301 });
  }

  /* ── Refresh cookie Supabase (si présente) ── */
  const supabaseRefreshToken = request.cookies.get(
    "sb-ukqvaejnbiojnwmrykki-auth-token",
  );
  if (supabaseRefreshToken) {
    response.cookies.set(
      "sb-ukqvaejnbiojnwmrykki-auth-token",
      supabaseRefreshToken.value,
      {
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      },
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static, _next/image, favicon.ico
     * - public files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};