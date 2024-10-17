import * as react_jsx_runtime from 'react/jsx-runtime';
import { Dispatch, SetStateAction } from 'react';

declare function TabSelect<T extends string>({ options, selected, onSelect, className, }: {
    options: {
        id: T;
        label: string;
    }[];
    selected: string | null;
    onSelect?: Dispatch<SetStateAction<T>> | ((id: T) => void);
    className?: string;
}): react_jsx_runtime.JSX.Element;

export { TabSelect };
