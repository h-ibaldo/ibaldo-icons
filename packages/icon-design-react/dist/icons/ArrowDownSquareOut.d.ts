import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownSquareOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownSquareOut: ForwardRefExoticComponent<ArrowDownSquareOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownSquareOut;
export { ArrowDownSquareOut };
