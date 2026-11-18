import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseBottomCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseBottomCircle: ForwardRefExoticComponent<ArrowClockwiseBottomCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseBottomCircle;
export { ArrowClockwiseBottomCircle };
