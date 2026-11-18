import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseCheckSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseCheckSquare: ForwardRefExoticComponent<ArrowClockwiseCheckSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseCheckSquare;
export { ArrowClockwiseCheckSquare };
