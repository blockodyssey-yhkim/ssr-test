import React from 'react';

import Footer from '@/components/Shared/Molecules/Footer/Footer';
import { NodeChildren } from '@/libraries/types';

const WithHeaderFooter = ({ children }: NodeChildren) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>헤더</header>

            <div className="flex-1 h-full pb-4">{children}</div>
            <Footer />
        </div>
    );
};

export default WithHeaderFooter;
