import { NextResponse } from 'next/server';

const GET = async () => {
    try {
        const res = await fetch(`http://192.168.20.50:3000/home/project`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: { revalidate: 0 }
        });
        return NextResponse.json(await res.json());
    } catch (err) {
        return NextResponse.json({ error: (err as Error).message });
    }
};

export { GET };
