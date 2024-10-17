import * as react_jsx_runtime from 'react/jsx-runtime';
import { PaginationState } from '@dub/ui';
import { PropsWithChildren } from 'react';

declare function PaginationControls({ pagination, setPagination, totalCount, unit, className, children, }: PropsWithChildren<{
    pagination: PaginationState;
    setPagination: (pagination: PaginationState) => void;
    totalCount: number;
    unit?: string | ((plural: boolean) => string);
    className?: string;
}>): react_jsx_runtime.JSX.Element;

export { PaginationControls };
