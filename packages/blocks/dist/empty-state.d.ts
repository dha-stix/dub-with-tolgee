import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren, ReactNode } from 'react';

type EmptyStateProps = PropsWithChildren<{
    icon: React.ElementType;
    title: string;
    description?: ReactNode;
    learnMore?: string;
}>;
declare function EmptyState({ icon: Icon, title, description, learnMore, children, }: EmptyStateProps): react_jsx_runtime.JSX.Element;

export { EmptyState, EmptyStateProps };
