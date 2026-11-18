import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchMinusTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchMinusTick: ForwardRefExoticComponent<StopwatchMinusTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchMinusTick;
export { StopwatchMinusTick };
