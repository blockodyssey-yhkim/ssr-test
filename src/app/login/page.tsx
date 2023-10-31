'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import z from 'zod';

import Button from '@/components/Shared/Atoms/Button';
import CommonInput from '@/components/Shared/Atoms/Input/CommonInput';

type FormData = {
    userId: string;
    userPw: string;
};
const authSchema = z.object({
    userId: z.string(),
    userPw: z.string().min(1).max(20),
});

const Login = () => {
    const searchParams = useSearchParams();
    const methods = useForm<FormData>({
        resolver: zodResolver(authSchema),
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    });

    const { control, handleSubmit } = methods;

    const { userId, userPw } = useWatch({ control });
    const { mutate } = useMutation({
        mutationFn: async () => {
            const res = await fetch(`api/members/sign-in`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    members: {
                        identifier: userId,
                        password: userPw,
                    },
                }),
            });
            return res.json();
        },
        onSuccess: async ({ data }) => {
            const { accessToken, refreshToken } = data;
            await signIn('credentials', {
                accessToken,
                refreshToken,
                redirect: true,
                callbackUrl: searchParams.get('callbackUrl') || '/',
            });
        },
    });
    const onSubmit = () => {
        mutate();
    };

    return (
        <FormProvider {...methods}>
            <article className="relative flex h-screen flex-col items-center justify-center px-48">
                <h3 className="absolute top-60 mb-24">로그인</h3>
                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" className="w-full">
                    <section className="flex w-full flex-col gap-2">
                        <CommonInput placeholder="이메일" type="email" name="userId" className="border-amber-800" />
                        <CommonInput placeholder="비밀번호" type="password" name="userPw" />
                    </section>

                    <Button type="submit" disabled={!userId || !userPw} className="mt-4">
                        sss
                    </Button>
                </form>
            </article>
        </FormProvider>
    );
};

export default Login;
