'use client';

import { NodeChildren } from '@/types';

type TProps = {
    data: any;
};
export default function WithAuth({ data, children }: NodeChildren & TProps) {
    console.log(data);
    if (data.resignToken?.accessToken) {
        console.log(data?.resignToken?.accessToken);
    }
    return (
        <div>
            {children}
            auth hydration...
        </div>
    );
}
