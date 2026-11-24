import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchXTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchXTick: ForwardRefExoticComponent<StopwatchXTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchXTick;
export { StopwatchXTick };
