import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Stopwatch: ForwardRefExoticComponent<StopwatchProps & RefAttributes<SVGSVGElement>>;

export default Stopwatch;
export { Stopwatch };
