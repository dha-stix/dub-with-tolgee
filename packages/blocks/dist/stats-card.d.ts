import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren, ReactNode } from 'react';

declare function StatsCard({ label, demo, graphic, children, }: PropsWithChildren<{
    label: string;
    demo?: boolean;
    graphic?: ReactNode;
}>): react_jsx_runtime.JSX.Element;
declare function StatsCardSkeleton({ error }: {
    error?: boolean;
}): react_jsx_runtime.JSX.Element;

export { StatsCard, StatsCardSkeleton };
