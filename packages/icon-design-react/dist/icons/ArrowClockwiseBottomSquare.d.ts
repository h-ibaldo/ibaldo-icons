import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseBottomSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseBottomSquare: ForwardRefExoticComponent<ArrowClockwiseBottomSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseBottomSquare;
export { ArrowClockwiseBottomSquare };
