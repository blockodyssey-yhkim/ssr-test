'use client';
import React from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthInput from '@/components/Shared/Atoms/Input/AuthInput';
type FormData = {
    userId: string;
    userPw: string;
};
const authSchema = z.object({
    userId: z.string().email(),
    userPw: z.string().min(1).max(20)
});
const Login = () => {
    const methods = useForm<FormData>({
        resolver: zodResolver(authSchema),
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    });
    const { control, handleSubmit, formState, register } = methods;
    const { userId, userPw } = useWatch({ control });

    const onSubmit = () => {
        console.log('submit');
        console.log(userId, userPw);
    };
    console.log(userId, userPw);
    return (
        <FormProvider {...methods}>
            <article className={'flex items-center justify-center h-screen flex-col relative px-48'}>
                <h3 className={'mb-24 absolute top-60'}>로그인</h3>
                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" className={'w-full'}>
                    <section className={'flex flex-col gap-2 w-full'}>
                        <AuthInput {...register('userId')} placeholder={'이메일'} type={'email'} name={'userId'} />
                        <AuthInput {...register('userPw')} placeholder={'비밀번호'} type={'password'} name={'userPw'} />
                    </section>
                    <button type={'submit'}>로그인</button>
                </form>
            </article>
        </FormProvider>
    );
};

export default Login;
