import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CartSmall: ForwardRefExoticComponent<CartSmallProps & RefAttributes<SVGSVGElement>>;

export default CartSmall;
export { CartSmall };
