import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchClockwiseBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchClockwiseBare: ForwardRefExoticComponent<StopwatchClockwiseBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchClockwiseBare;
export { StopwatchClockwiseBare };
