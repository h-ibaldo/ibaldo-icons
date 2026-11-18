import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerSquare: ForwardRefExoticComponent<PointerSquareProps & RefAttributes<SVGSVGElement>>;

export default PointerSquare;
export { PointerSquare };
