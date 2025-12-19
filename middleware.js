import { NextResponse } from "next/server";

export function middleware(request) {
    const session = request.cookies.get('session');

    //Protege todas as rotas que começam com /dashboard
    if (!session && request.nextUrl.pathname.startsWith('/SAC/form')) {
        return NextResponse.redirect(new URL('/SAC', request.url));
    }

    //Se já estiver logado e tentar acessar login, manda pro dashboard
    if (session && request.nextUrl.pathname === '/SAC') {
        return NextResponse.redirect(new URL('/SAC/form', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/SAC/form/:path*', '/SAC'],
};