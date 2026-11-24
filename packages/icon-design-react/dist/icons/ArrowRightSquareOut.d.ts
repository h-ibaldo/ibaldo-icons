import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightSquareOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightSquareOut: ForwardRefExoticComponent<ArrowRightSquareOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightSquareOut;
export { ArrowRightSquareOut };
