import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDiagonalInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDiagonalIn: ForwardRefExoticComponent<ArrowDiagonalInProps & RefAttributes<SVGSVGElement>>;

export default ArrowDiagonalIn;
export { ArrowDiagonalIn };
