import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseCheckCircleSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseCheckCircleSmall: ForwardRefExoticComponent<ArrowClockwiseCheckCircleSmallProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseCheckCircleSmall;
export { ArrowClockwiseCheckCircleSmall };
