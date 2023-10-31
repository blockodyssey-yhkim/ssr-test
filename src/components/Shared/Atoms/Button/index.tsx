'use client';

import { ComponentProps } from 'react';

import cn from 'classnames';

type TProps = {
    className?: string;
} & ComponentProps<'button'>;

export default function Button({ className, ...props }: TProps) {
    return (
        <button
            className={cn(
                className,
                'h-12 w-full cursor-pointer rounded-xl bg-black text-white shadow-lg duration-300 hover:scale-[1.02] hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-50 disabled:hover:scale-100',
            )}
            type="button"
            {...props}
        >
            버튼
        </button>
    );
}
