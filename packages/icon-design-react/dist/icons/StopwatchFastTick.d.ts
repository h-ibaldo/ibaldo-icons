import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchFastTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchFastTick: ForwardRefExoticComponent<StopwatchFastTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchFastTick;
export { StopwatchFastTick };
