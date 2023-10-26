import ExternalApi from '@/libraries/axios/externalApi';
import { NextResponse } from 'next/server';

const POST = async (request: Request) => {
    const req = await request.json();
    const responseData = await ExternalApi({
        endpoint: '/members/signIn',
        method: 'POST',
        body: {
            ...req
        }
    });
    switch (responseData.status) {
        case 201: {
            return NextResponse.json(responseData, { status: 201 });
        }
        case 401: {
            if (responseData.data?.message === 'Not Verify Member.') {
                return NextResponse.json('메일 인증을 완료해주세요', { status: 401 });
            }
            return NextResponse.json('입력 내용을 다시 확인하여 주세요', { status: 401 });
        }
        case 403: {
            return NextResponse.json('로그인 횟수를 초과하였습니다', { status: 403 });
        }
        default: {
            return NextResponse.json(responseData, { status: responseData.status });
        }
    }
};
export { POST };
