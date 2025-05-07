import { NextResponse } from 'next/server'

export function middleware(request) {
    const { searchParams } = request.nextUrl
    const token = searchParams.get('token')
    const expectedToken = process.env.ACCESS_TOKEN

    if (token !== expectedToken) {
        return new NextResponse('Brak dostępu', { status: 401 })
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/((?!_next).*)'],
}
