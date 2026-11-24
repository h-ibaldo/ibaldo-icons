import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownLeftSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownLeftSquare: ForwardRefExoticComponent<ArrowDownLeftSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownLeftSquare;
export { ArrowDownLeftSquare };
