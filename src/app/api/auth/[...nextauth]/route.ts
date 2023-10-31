import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

type TReturnData = {
    accessToken: string;
    refreshToken: string;
};
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialProvider({
            name: 'credentials',
            type: 'credentials',
            credentials: {
                accessToken: { label: 'accessToken', type: 'accessToken', required: false },
                refreshToken: { label: 'refreshToken', type: 'refreshToken', required: false },
            },

            async authorize(credentials) {
                if (credentials) {
                    const returnData: TReturnData = {
                        accessToken: credentials?.accessToken,
                        refreshToken: credentials?.refreshToken,
                    };
                    return returnData as any;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger === 'update') {
                return { ...token, ...session.user };
            }

            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
