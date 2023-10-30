'use client';

import React, { ReactElement } from 'react';

import { useRouter } from 'next/navigation';

type THeaderProps = {
    isBack?: boolean;
    title?: string;
    action?: ReactElement | null;
};
// 액션은 컴포넌트로 불러야 할 수도
const CommonHeader = ({ action = null, title = '', isBack = true }: THeaderProps) => {
    const router = useRouter();
    const backHandler = () => {
        router.back();
    };
    return (
        <header className="flex w-full justify-between h-16 items-center border-b-amber-500 border-b-4">
            <div className="border-r-amber-200 border-r-4 h-full flex w-16 items-center justify-center">
                {isBack ? (
                    <button type="button" onClick={backHandler}>
                        X
                    </button>
                ) : null}
            </div>
            <div>
                <h1 className="flex-1">{title}</h1>
            </div>
            {action ? (
                <div className="border-l-amber-200 border-l-4 h-full flex w-16 items-center justify-center">
                    {action}
                </div>
            ) : (
                <div />
            )}
        </header>
    );
};

export default CommonHeader;
