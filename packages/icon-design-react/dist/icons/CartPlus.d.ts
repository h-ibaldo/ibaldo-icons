import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CartPlus: ForwardRefExoticComponent<CartPlusProps & RefAttributes<SVGSVGElement>>;

export default CartPlus;
export { CartPlus };
