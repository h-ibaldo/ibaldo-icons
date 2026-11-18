import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchSnoozeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchSnooze: ForwardRefExoticComponent<StopwatchSnoozeProps & RefAttributes<SVGSVGElement>>;

export default StopwatchSnooze;
export { StopwatchSnooze };
