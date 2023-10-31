import React, { ReactElement } from 'react';

import CommonHeader from '@/components/Shared/Molecules/Header/CommonHeader';

import { NodeChildren } from '../../types';

type TWithHeaderProps = {
    title: string;
    action?: ReactElement;
    isBack?: boolean;
};
const WithHeader = ({ children, title, isBack, action }: NodeChildren & TWithHeaderProps) => {
    return (
        <>
            <CommonHeader action={action} title={title} isBack={isBack} />
            {children}
        </>
    );
};

export default WithHeader;
