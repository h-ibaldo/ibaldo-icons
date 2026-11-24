import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseBottom: ForwardRefExoticComponent<ArrowCounterclockwiseBottomProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseBottom;
export { ArrowCounterclockwiseBottom };
