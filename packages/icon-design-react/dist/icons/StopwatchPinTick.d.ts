import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPinTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPinTick: ForwardRefExoticComponent<StopwatchPinTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPinTick;
export { StopwatchPinTick };
