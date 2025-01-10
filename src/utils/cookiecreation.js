import { cookies } from 'next/headers';

export async function cookieCreation() {
    const cookieStore = await cookies();

    cookieStore.set('shinde', 'construction', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    });
}
