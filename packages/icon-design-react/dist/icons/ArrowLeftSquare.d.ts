import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftSquare: ForwardRefExoticComponent<ArrowLeftSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftSquare;
export { ArrowLeftSquare };
