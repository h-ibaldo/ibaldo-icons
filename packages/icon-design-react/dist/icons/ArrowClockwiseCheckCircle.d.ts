import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseCheckCircle: ForwardRefExoticComponent<ArrowClockwiseCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseCheckCircle;
export { ArrowClockwiseCheckCircle };
