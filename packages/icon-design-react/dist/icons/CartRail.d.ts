import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartRailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CartRail: ForwardRefExoticComponent<CartRailProps & RefAttributes<SVGSVGElement>>;

export default CartRail;
export { CartRail };
