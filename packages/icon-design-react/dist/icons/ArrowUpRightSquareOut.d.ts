import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightSquareOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightSquareOut: ForwardRefExoticComponent<ArrowUpRightSquareOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightSquareOut;
export { ArrowUpRightSquareOut };
