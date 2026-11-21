import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CartGrid: ForwardRefExoticComponent<CartGridProps & RefAttributes<SVGSVGElement>>;

export default CartGrid;
export { CartGrid };
