import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseSquare: ForwardRefExoticComponent<ArrowClockwiseSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseSquare;
export { ArrowClockwiseSquare };
