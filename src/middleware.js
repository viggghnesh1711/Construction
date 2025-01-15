import { NextResponse } from 'next/server';

export function middleware(request) {
    const username = request.cookies.get('shinde');

    if (!username) {
        return NextResponse.redirect(new URL('/Login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/Dashboard', '/Services'], 
};

