import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartLineSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CartLineSquare2: ForwardRefExoticComponent<CartLineSquare2Props & RefAttributes<SVGSVGElement>>;

export default CartLineSquare2;
export { CartLineSquare2 };
