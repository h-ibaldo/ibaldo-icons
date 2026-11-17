import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchClockwiseDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchClockwiseDetached: ForwardRefExoticComponent<StopwatchClockwiseDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchClockwiseDetached;
export { StopwatchClockwiseDetached };
