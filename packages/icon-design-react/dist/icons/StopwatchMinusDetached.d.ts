import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchMinusDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchMinusDetached: ForwardRefExoticComponent<StopwatchMinusDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchMinusDetached;
export { StopwatchMinusDetached };
