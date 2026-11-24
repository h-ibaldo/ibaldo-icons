import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPieDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPieDetached: ForwardRefExoticComponent<StopwatchPieDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPieDetached;
export { StopwatchPieDetached };
