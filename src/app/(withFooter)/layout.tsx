import React from 'react';

import Footer from '@/components/Shared/Molecules/Footer/Footer';

import { NodeChildren } from '../../types';

const WithFooter = ({ children }: NodeChildren) => {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="h-full flex-1 pb-4">{children}</div>
            <Footer />
        </div>
    );
};

export default WithFooter;
