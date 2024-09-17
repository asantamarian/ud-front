// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if the user is authenticated by checking cookies or tokens
    const authToken = request.cookies.get('auth-token')?.value;

    if (!authToken && request.nextUrl.pathname.startsWith('/locker-room')) {
        // If the user is not authenticated and tries to access a protected route
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow the request to proceed if authenticated
    return NextResponse.next();
}

export const config = {
    matcher: ['/locker-room', '/profile'], // Add all protected routes here
};
