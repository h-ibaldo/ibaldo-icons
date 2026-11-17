import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnDownSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnDownSquare: ForwardRefExoticComponent<ArrowUturnDownSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnDownSquare;
export { ArrowUturnDownSquare };
