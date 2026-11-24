import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseSquare: ForwardRefExoticComponent<ArrowCounterclockwiseSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseSquare;
export { ArrowCounterclockwiseSquare };
