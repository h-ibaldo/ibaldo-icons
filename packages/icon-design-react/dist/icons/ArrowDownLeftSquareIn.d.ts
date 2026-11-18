import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownLeftSquareInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownLeftSquareIn: ForwardRefExoticComponent<ArrowDownLeftSquareInProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownLeftSquareIn;
export { ArrowDownLeftSquareIn };
