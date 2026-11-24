import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPlusDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPlusDetached: ForwardRefExoticComponent<StopwatchPlusDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPlusDetached;
export { StopwatchPlusDetached };
