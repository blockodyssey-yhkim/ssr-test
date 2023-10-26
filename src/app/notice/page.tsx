import React from 'react';
import WithHeader from '@/components/Templates/WithHeader';
import List from '@/components/Shared/Molecules/List/List';
import Link from 'next/link';
import Footer from '@/components/Shared/Molecules/Footer/Footer';
import WithFooterHeader from '@/components/Templates/WithFooterHeader';

export type TNotice = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string | number;
    createdBy: string;
};
type TResponse = {
    noticesList: TNotice[];
};
export default async function NoticePage() {
    const body = { notices: { page: 1 } };

    const res = await fetch(`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/notices/list`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        next: { revalidate: 10 }
    });
    const data: TResponse = await res.json();

    return (
        <WithFooterHeader title={'공지사항'} action={<Link href={'/'}>홈으로</Link>}>
            <List className={'gap-4 mt-4 px-4'}>
                {data.noticesList.map(({ id, title, createdAt, content, createdBy }) => (
                    <li key={id} className={'bg-zinc-100 h-16 rounded-full px-4 flex items-center'}>
                        {title}
                    </li>
                ))}
            </List>
        </WithFooterHeader>
    );
}
