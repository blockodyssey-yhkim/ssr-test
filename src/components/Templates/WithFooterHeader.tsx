import React, { ReactElement } from 'react';
import { NodeChildren } from '@/libraries/types';
import CommonHeader from '@/components/Shared/Molecules/Header/CommonHeader';
import Footer from '@/components/Shared/Molecules/Footer/Footer';
type TProps = {
    title: string;
    action?: ReactElement;
    isBack?: boolean;
};
const WithHeaderFooter = ({ children, title, isBack, action }: NodeChildren & TProps) => {
    return (
        <div className={'flex flex-col min-h-screen'}>
            <CommonHeader action={action} title={title} isBack={isBack} />
            <div className={'flex-1 h-full pb-4'}>{children}</div>
            <Footer />
        </div>
    );
};

export default WithHeaderFooter;
