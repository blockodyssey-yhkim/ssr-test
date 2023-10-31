import axios, { AxiosError, HttpStatusCode } from 'axios';
import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const baseURL = process.env.EXTERNAL_API_URL;
type TProps = {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: object;
    params?: object;
};
export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Custom-Header': 'foobar',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default async function PrivateApi({ method, body, endpoint, params }: TProps) {
    let authHeader;
    const isResignPath = endpoint === '/members/reSign';
    const session = await getServerSession(authOptions);
    const newToken = {
        accessToken: '',
        refreshToken: '',
    };

    axiosInstance.interceptors.request.use(
        async (config) => {
            return config;
        },
        (error) => Promise.reject(error),
    );

    if (session) {
        authHeader = {
            Authorization: `Bearer ${isResignPath ? session.user.refreshToken : session.user.accessToken}`,
        };
    }

    try {
        const {
            data: responseData,
            status,
            headers,
        } = await axiosInstance({
            baseURL,
            method,

            data: body,
            url: endpoint,
            params,
            headers: {
                ...(authHeader && authHeader),
            },
        });
        return {
            data: responseData,
            status,
            headers: {
                ...headers,
                resignToken: {
                    ...(newToken && newToken),
                },
            },
        };
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        const { data, status } = response!;
        return {
            data,
            status,
        };
    }
}
