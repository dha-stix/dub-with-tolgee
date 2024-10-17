import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';

type GaugeProps = PropsWithChildren<{
    value: number;
    min?: number;
    max: number;
}>;
declare function Gauge({ value, min, max, children }: GaugeProps): react_jsx_runtime.JSX.Element;

export { Gauge, GaugeProps };
