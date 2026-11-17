import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnRightSquare: ForwardRefExoticComponent<ArrowUturnRightSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnRightSquare;
export { ArrowUturnRightSquare };
