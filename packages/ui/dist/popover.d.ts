import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren, ReactNode, WheelEventHandler } from 'react';

type PopoverProps = PropsWithChildren<{
    content: ReactNode | string;
    align?: "center" | "start" | "end";
    side?: "bottom" | "top" | "left" | "right";
    openPopover: boolean;
    setOpenPopover: (open: boolean) => void;
    mobileOnly?: boolean;
    popoverContentClassName?: string;
    collisionBoundary?: Element | Element[];
    sticky?: "partial" | "always";
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
    onWheel?: WheelEventHandler;
}>;
declare function Popover({ children, content, align, side, openPopover, setOpenPopover, mobileOnly, popoverContentClassName, collisionBoundary, sticky, onEscapeKeyDown, onWheel, }: PopoverProps): react_jsx_runtime.JSX.Element;

export { Popover, PopoverProps };
