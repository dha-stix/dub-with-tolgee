import react__default, { ReactNode, ElementType } from 'react';

interface CountingNumbersProps {
    asChild?: boolean;
    className?: string;
    children: ReactNode;
    prefix?: ReactNode;
    duration?: number;
    as?: ElementType;
    variant?: "full" | "compact";
}
declare const CountingNumbers: react__default.ForwardRefExoticComponent<CountingNumbersProps & react__default.RefAttributes<HTMLSpanElement>>;

export { CountingNumbers };
