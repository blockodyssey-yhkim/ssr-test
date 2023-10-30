import React, { ReactElement } from 'react';

import Footer from '@/components/Shared/Molecules/Footer/Footer';
import CommonHeader from '@/components/Shared/Molecules/Header/CommonHeader';
import { NodeChildren } from '@/libraries/types';

type TProps = {
    title: string;
    action?: ReactElement;
    isBack?: boolean;
};

const WithHeaderFooter = ({ children, title, isBack, action }: NodeChildren & TProps) => {
    return (
        <>
            {/* // <div className="flex flex-col min-h-screen"> */}
            <div id="header">
                headers
                {/* <CommonHeader action={action} title={title} isBack={isBack} /> */}
            </div>

            <div className="flex-1 h-full pb-4" id="contents">
                contents
                {/* {children} */}
            </div>
            {/* <Footer /> */}
            {/* // </div> */}
        </>
    );
};

export default WithHeaderFooter;
