import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchOffTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchOffTick: ForwardRefExoticComponent<StopwatchOffTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchOffTick;
export { StopwatchOffTick };
