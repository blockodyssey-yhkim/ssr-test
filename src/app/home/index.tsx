import Link from 'next/link';

import HomeHeader from '@/app/home/components/HomeHeader';
import List from '@/components/Shared/Molecules/List/List';
import WithAuth from '@/components/Templates/WithAuth';
import PrivateApi from '@/libraries/axios/privateApi';

export const dynamic = 'force-dynamic';
export default async function Home() {
    const res = await PrivateApi({
        endpoint: '/members/view',
        method: 'GET',
    });

    return (
        <WithAuth data={res}>
            <div className="m-auto flex h-full w-screen max-w-6xl flex-col px-4">
                <HomeHeader />
                <h1>PAGE PATH 경로</h1>
                <List className="mt-4">
                    <li>
                        <Link className="text-xl font-medium text-blue-400 underline underline-offset-2" href="/notice">
                            공지사항 header & footer
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="text-xl font-medium text-blue-400 underline underline-offset-2"
                            href="/something"
                        >
                            서버시간 ISR 테스트용 header
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xl font-medium text-blue-400 underline underline-offset-2" href="/my">
                            싱글페이지 WithAuth
                        </Link>
                    </li>
                </List>
            </div>
        </WithAuth>
    );
}
