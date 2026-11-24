import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPieTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPieTick: ForwardRefExoticComponent<StopwatchPieTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPieTick;
export { StopwatchPieTick };
