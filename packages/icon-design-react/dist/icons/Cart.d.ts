import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cart: ForwardRefExoticComponent<CartProps & RefAttributes<SVGSVGElement>>;

export default Cart;
export { Cart };
