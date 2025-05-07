// middleware.js
import { NextResponse } from 'next/server'

const PASSWORD = 'haslo20031819'

export function middleware(request) {
    const { searchParams, pathname } = request.nextUrl
    // Jeśli ścieżka zawiera kropkę, to jest to plik statyczny – przepuść bez sprawdzania hasła
    if (pathname.includes('.')) {
        return NextResponse.next();
    }
    const token = searchParams.get('token')
    if (token !== PASSWORD) {
        return new NextResponse('Brak dostępu', {
            status: 401,
        })
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/((?!_next).*)'],
}
