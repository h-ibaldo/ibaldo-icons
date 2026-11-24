import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchDottedDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchDottedDetached: ForwardRefExoticComponent<StopwatchDottedDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchDottedDetached;
export { StopwatchDottedDetached };
