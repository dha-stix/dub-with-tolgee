import * as react_jsx_runtime from 'react/jsx-runtime';

interface ToggleOption {
    value: string;
    label: string;
    badge?: React.ReactNode;
}
declare function ToggleGroup({ options, selected, selectAction, className, style, }: {
    options: ToggleOption[];
    selected: string | null;
    selectAction: (option: string) => void;
    className?: string;
    style?: React.CSSProperties;
}): react_jsx_runtime.JSX.Element;

export { ToggleGroup };
