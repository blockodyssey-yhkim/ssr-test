import React, { ComponentProps, forwardRef } from 'react';

import cn from 'classnames';
import { useFormContext } from 'react-hook-form';

type TProps = {
    className?: string;
} & ComponentProps<'input'>;
const CommonInput = forwardRef(({ className, ...props }: TProps, _) => {
    const { register } = useFormContext();

    return (
        <input
            {...(props.name && { ...register(props.name as string) })}
            {...props}
            className={cn(className, 'h-12 border-zinc-300 border-2 px-4 rounded-2xl')}
        />
    );
});
CommonInput.displayName = 'CommonInput';

export default CommonInput;
