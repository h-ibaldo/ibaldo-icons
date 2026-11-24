import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseBottom: ForwardRefExoticComponent<ArrowClockwiseBottomProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseBottom;
export { ArrowClockwiseBottom };
