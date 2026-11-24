import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDiagonalInLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDiagonalInLeft: ForwardRefExoticComponent<ArrowDiagonalInLeftProps & RefAttributes<SVGSVGElement>>;

export default ArrowDiagonalInLeft;
export { ArrowDiagonalInLeft };
