import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CartArrowDown: ForwardRefExoticComponent<CartArrowDownProps & RefAttributes<SVGSVGElement>>;

export default CartArrowDown;
export { CartArrowDown };
