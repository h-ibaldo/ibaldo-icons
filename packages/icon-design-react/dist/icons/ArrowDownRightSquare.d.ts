import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownRightSquare: ForwardRefExoticComponent<ArrowDownRightSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownRightSquare;
export { ArrowDownRightSquare };
