import React from 'react';

import cn from 'classnames';

import { NodeChildren } from '../../../../types';

type TListProps = {
    className?: string;
};
const List = ({ className, children }: TListProps & NodeChildren) => {
    return <ul className={cn(className, 'flex flex-col gap-2')}>{children}</ul>;
};

export default List;
