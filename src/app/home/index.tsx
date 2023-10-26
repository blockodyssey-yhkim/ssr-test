import React from 'react';
import List from '@/components/Shared/Molecules/List/List';
import Link from 'next/link';

const Home = () => {
    return (
        <div className={'py-12 px-4'}>
            <h1>PAGE PATH 경로</h1>
            <List className={'mt-4'}>
                <li>
                    <Link className={'underline underline-offset-2 font-medium text-xl text-blue-400'} href="/notice">
                        공지사항 header & footer
                    </Link>
                </li>
                <li>
                    <Link
                        className={'underline underline-offset-2 font-medium text-xl text-blue-400'}
                        href="/something"
                    >
                        서버시간 ISR 테스트용 header
                    </Link>
                </li>
                <li>
                    <Link className={'underline underline-offset-2 font-medium text-xl text-blue-400'} href="/my">
                        싱글페이지 WithAuth
                    </Link>
                </li>
            </List>
        </div>
    );
};

export default Home;
