import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            accessToken: string;
            refreshToken: string;
        };
    }

    interface Token {
        user: {
            data: {
                accessToken: string;
                refreshToken: string;
            };
            name?: string | null;
            email?: string | null;
            image?: string | null;
            accessToken: string;
            refreshToken: string;
        };
    }

    interface User {
        data: {
            accessToken: string;
            refreshToken: string;
        };
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        accessToken: string;
        refreshToken: string;
    }
}
