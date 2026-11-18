import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerSquareCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerSquareCorner: ForwardRefExoticComponent<PointerSquareCornerProps & RefAttributes<SVGSVGElement>>;

export default PointerSquareCorner;
export { PointerSquareCorner };
