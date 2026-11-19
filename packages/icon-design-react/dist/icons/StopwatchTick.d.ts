import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchTick: ForwardRefExoticComponent<StopwatchTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchTick;
export { StopwatchTick };
