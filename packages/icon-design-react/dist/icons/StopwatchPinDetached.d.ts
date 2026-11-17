import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPinDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPinDetached: ForwardRefExoticComponent<StopwatchPinDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPinDetached;
export { StopwatchPinDetached };
