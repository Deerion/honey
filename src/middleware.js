// middleware.js
import { NextResponse } from 'next/server'

const PASSWORD = 'tajnehaslodostronytymczasoweabyniktjejniewidzialniepatrztutaj'

export function middleware(request) {
    const { searchParams } = request.nextUrl
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