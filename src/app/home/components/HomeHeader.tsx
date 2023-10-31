'use client';

import { signOut, useSession } from 'next-auth/react';

export default function HomeHeader() {
    const { data } = useSession();
    return (
        <header>
            <h1>홈 HEADER</h1>
            <div>{data?.user.accessToken}</div>
            <button onClick={() => signOut()}>로그아웃</button>
        </header>
    );
}
