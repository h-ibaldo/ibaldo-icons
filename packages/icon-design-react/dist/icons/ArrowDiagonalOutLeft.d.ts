import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDiagonalOutLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDiagonalOutLeft: ForwardRefExoticComponent<ArrowDiagonalOutLeftProps & RefAttributes<SVGSVGElement>>;

export default ArrowDiagonalOutLeft;
export { ArrowDiagonalOutLeft };
