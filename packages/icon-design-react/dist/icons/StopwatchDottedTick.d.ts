import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchDottedTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchDottedTick: ForwardRefExoticComponent<StopwatchDottedTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchDottedTick;
export { StopwatchDottedTick };
