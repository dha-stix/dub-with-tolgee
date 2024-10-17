import * as react from 'react';
import { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ButtonProps } from './button.js';
import 'class-variance-authority/dist/types';
import 'class-variance-authority';

declare function TooltipProvider({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
interface TooltipProps extends Omit<TooltipPrimitive.TooltipContentProps, "content"> {
    content: ReactNode | string | ((props: {
        setOpen: (open: boolean) => void;
    }) => ReactNode);
    disableHoverableContent?: TooltipPrimitive.TooltipProps["disableHoverableContent"];
}
declare function Tooltip({ children, content, side, disableHoverableContent, ...rest }: TooltipProps): react_jsx_runtime.JSX.Element;
declare function TooltipContent({ title, cta, href, target, onClick, }: {
    title: ReactNode;
    cta?: string;
    href?: string;
    target?: string;
    onClick?: () => void;
}): react_jsx_runtime.JSX.Element;
declare function SimpleTooltipContent({ title, cta, href, }: {
    title: string;
    cta: string;
    href: string;
}): react_jsx_runtime.JSX.Element;
declare function LinkifyTooltipContent({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function InfoTooltip(props: Omit<TooltipProps, "children">): react_jsx_runtime.JSX.Element;
declare function NumberTooltip({ value, unit, prefix, children, lastClicked, }: {
    value?: number | null;
    unit?: string;
    prefix?: string;
    children: ReactNode;
    lastClicked?: Date | null;
}): string | number | boolean | Iterable<ReactNode> | react.PromiseLikeOfReactNode | react_jsx_runtime.JSX.Element | null | undefined;
declare function BadgeTooltip({ children, content, ...props }: TooltipProps): react_jsx_runtime.JSX.Element;
declare function ButtonTooltip({ children, tooltipProps, ...props }: {
    children: ReactNode;
    tooltipProps: TooltipProps;
} & ButtonProps): react_jsx_runtime.JSX.Element;

export { BadgeTooltip, ButtonTooltip, InfoTooltip, LinkifyTooltipContent, NumberTooltip, SimpleTooltipContent, Tooltip, TooltipContent, TooltipProps, TooltipProvider };
