import WithHeader from '@/components/Templates/WithHeader';

interface Post {
    title: string;
    id: number;
}

export default async function SomethingPage() {
    // const res = await fetch(`http://192.168.20.50:3000/home/project`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     next: { revalidate: 0 }
    // });
    // const { data } = await res.json();
    // if (!res) return <div>Server Error</div>;
    // return <div>{data}</div>;
    return (
        <WithHeader title="ISR 테스트용">
            <div>서버시간</div>
        </WithHeader>
    );

    // return <ul>{dayjs(time).format('HH:mm:ss')}</ul>;
}
