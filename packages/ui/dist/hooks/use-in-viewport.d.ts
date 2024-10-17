import { RefObject } from 'react';

declare function useInViewport(elementRef: RefObject<Element>, options?: {
    root?: RefObject<Element>;
    defaultValue?: boolean;
}): boolean;

export { useInViewport };
