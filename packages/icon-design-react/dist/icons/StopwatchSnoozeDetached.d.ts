import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchSnoozeDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchSnoozeDetached: ForwardRefExoticComponent<StopwatchSnoozeDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchSnoozeDetached;
export { StopwatchSnoozeDetached };
