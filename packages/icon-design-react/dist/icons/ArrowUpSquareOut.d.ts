import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpSquareOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpSquareOut: ForwardRefExoticComponent<ArrowUpSquareOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpSquareOut;
export { ArrowUpSquareOut };
