import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnLeftSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnLeftSquare: ForwardRefExoticComponent<ArrowUturnLeftSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnLeftSquare;
export { ArrowUturnLeftSquare };
