import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CartCheck: ForwardRefExoticComponent<CartCheckProps & RefAttributes<SVGSVGElement>>;

export default CartCheck;
export { CartCheck };
