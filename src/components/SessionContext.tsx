'use client';

import { SessionProvider } from 'next-auth/react';

import { NodeChildren } from '@/types';

export default function SessionContext({ children }: NodeChildren) {
    return <SessionProvider>{children}</SessionProvider>;
}
