import React from 'react';

import ReactQuery from '@/components/ReactQuery';
import { NodeChildren } from '@/types';

import './globals.css';

import SessionContext from '@/components/SessionContext';

import type { Metadata } from 'next';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: NodeChildren) {
    return (
        <html lang="ko">
            <SessionContext>
                <ReactQuery>
                    <body className="w-full">{children}</body>
                </ReactQuery>
            </SessionContext>
        </html>
    );
}
