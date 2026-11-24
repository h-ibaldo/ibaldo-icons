import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPlusTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPlusTick: ForwardRefExoticComponent<StopwatchPlusTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPlusTick;
export { StopwatchPlusTick };
