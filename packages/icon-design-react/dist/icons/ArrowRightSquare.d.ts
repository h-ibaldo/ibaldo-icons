import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightSquare: ForwardRefExoticComponent<ArrowRightSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightSquare;
export { ArrowRightSquare };
