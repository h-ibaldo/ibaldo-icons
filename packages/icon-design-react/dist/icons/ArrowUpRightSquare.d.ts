import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightSquare: ForwardRefExoticComponent<ArrowUpRightSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightSquare;
export { ArrowUpRightSquare };
