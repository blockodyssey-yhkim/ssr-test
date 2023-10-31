'use client';

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NodeChildren } from '../types';

export default function ReactQuery({ children }: NodeChildren) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false, // default: true
                retry: false,
            },
        },
    });
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
