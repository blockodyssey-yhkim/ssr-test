import React from 'react';
import cn from 'classnames';
import { NodeChildren } from '@/libraries/types';

type TListProps = {
    className?: string;
};
const List = ({ className, children }: TListProps & NodeChildren) => {
    return <ul className={cn(className, 'flex gap-2 flex-col')}>{children}</ul>;
};

export default List;
