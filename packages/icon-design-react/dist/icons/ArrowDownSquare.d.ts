import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownSquare: ForwardRefExoticComponent<ArrowDownSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownSquare;
export { ArrowDownSquare };
