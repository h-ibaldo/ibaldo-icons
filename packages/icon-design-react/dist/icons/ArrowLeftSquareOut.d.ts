import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftSquareOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftSquareOut: ForwardRefExoticComponent<ArrowLeftSquareOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftSquareOut;
export { ArrowLeftSquareOut };
