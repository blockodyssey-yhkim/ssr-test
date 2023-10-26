import axios, { AxiosError } from 'axios';

const baseURL = process.env.EXTERNAL_API_URL;
type TProps = {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: object;
    params?: object;
};
export default async function ExternalApi({ method, body, endpoint, params }: TProps) {
    let authHeader;
    const session = false;
    if (session) {
        authHeader = {
            Authorization: `Bearer ${session}`
        };
    }

    try {
        const { data } = await axios({
            baseURL,
            method,
            data: body,
            url: endpoint,
            params,
            headers: {
                ...(authHeader && authHeader)
            }
        });
        return data;
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        const { data, status } = response!;
        return {
            data,
            status
        };
    }
}
