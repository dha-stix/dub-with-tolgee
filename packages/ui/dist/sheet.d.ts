import * as react_jsx_runtime from 'react/jsx-runtime';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as react from 'react';

declare const Sheet: react.FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: react.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: react.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: react.FC<SheetPrimitive.DialogPortalProps>;
interface SheetContentProps extends react.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
}
declare const SheetContent: react.ForwardRefExoticComponent<SheetContentProps & react.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: react.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: react.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: react.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: react.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetPortal, SheetTitle, SheetTrigger };
