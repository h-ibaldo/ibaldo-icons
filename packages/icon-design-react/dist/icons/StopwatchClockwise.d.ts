import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchClockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchClockwise: ForwardRefExoticComponent<StopwatchClockwiseProps & RefAttributes<SVGSVGElement>>;

export default StopwatchClockwise;
export { StopwatchClockwise };
