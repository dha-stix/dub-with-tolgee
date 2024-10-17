import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren, ReactNode } from 'react';
import { EmptyStateProps } from './empty-state.js';

type EventListProps = PropsWithChildren<{
    events: {
        icon: ReactNode;
        content: ReactNode;
        right?: ReactNode;
    }[];
    totalEvents: number;
    emptyState: EmptyStateProps;
}>;
declare function EventList({ events, totalEvents, emptyState }: EventListProps): react_jsx_runtime.JSX.Element;
declare function EventListSkeleton(): react_jsx_runtime.JSX.Element;

export { EventList, EventListProps, EventListSkeleton };
