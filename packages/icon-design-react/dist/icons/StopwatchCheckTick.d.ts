import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchCheckTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchCheckTick: ForwardRefExoticComponent<StopwatchCheckTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchCheckTick;
export { StopwatchCheckTick };
