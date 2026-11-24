import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDiagonalOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDiagonalOut: ForwardRefExoticComponent<ArrowDiagonalOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowDiagonalOut;
export { ArrowDiagonalOut };
