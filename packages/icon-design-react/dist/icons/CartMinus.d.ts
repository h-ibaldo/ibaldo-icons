import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CartMinus: ForwardRefExoticComponent<CartMinusProps & RefAttributes<SVGSVGElement>>;

export default CartMinus;
export { CartMinus };
