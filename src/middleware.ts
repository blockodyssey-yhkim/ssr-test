import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export { default } from 'next-auth/middleware';
const withAuthList = ['/myboats', '/store'];
const withoutAuthList = ['/login', '/signup', '/members/confirm', '/members/verify'];
const withAuth = (req: NextRequest, isLoggedIn: boolean) => {
    const url = req.nextUrl.clone();
    if (!isLoggedIn) {
        url.searchParams.set('callbackUrl', url.pathname);
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
};
const withoutAuth = async (req: NextRequest, isLoggedIn: boolean) => {
    const url = req.nextUrl.clone();
    if (isLoggedIn) {
        url.pathname = '/';
        url.search = '';
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
};
export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isWithAuth = withAuthList.filter((path) => pathname.startsWith(path)).length > 0;
    const isWithoutAuth = withoutAuthList.filter((path) => pathname.startsWith(path)).length > 0;
    if (isWithAuth) return withAuth(req, !!token);
    if (isWithoutAuth) return withoutAuth(req, !!token);
    return NextResponse.next();
}
export const config = { matcher: [...withAuthList, ...withoutAuthList] };
