import React, { ComponentProps, forwardRef } from 'react';
import cn from 'classnames';
import { useFormContext } from 'react-hook-form';

type TProps = {
    className?: string;
} & ComponentProps<'input'>;
const AuthInput = forwardRef(({ className, ...props }: TProps, _) => {
    const { register } = useFormContext();
    return (
        <input
            {...props}
            {...register(props.name as string)}
            className={cn(className, 'h-12 border-zinc-300 border-2 px-4')}
        />
    );
});
AuthInput.displayName = 'Input';

export default AuthInput;
