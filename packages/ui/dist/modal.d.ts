import * as react_jsx_runtime from 'react/jsx-runtime';
import { Dispatch, SetStateAction, ComponentProps } from 'react';
import { Drawer } from 'vaul';

declare function Modal({ children, className, showModal, setShowModal, onClose, desktopOnly, preventDefaultClose, drawerRootProps, }: {
    children: React.ReactNode;
    className?: string;
    showModal?: boolean;
    setShowModal?: Dispatch<SetStateAction<boolean>>;
    onClose?: () => void;
    desktopOnly?: boolean;
    preventDefaultClose?: boolean;
    drawerRootProps?: ComponentProps<typeof Drawer.Root>;
}): react_jsx_runtime.JSX.Element;

export { Modal };
