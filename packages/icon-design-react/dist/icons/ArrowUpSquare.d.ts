import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpSquare: ForwardRefExoticComponent<ArrowUpSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpSquare;
export { ArrowUpSquare };
