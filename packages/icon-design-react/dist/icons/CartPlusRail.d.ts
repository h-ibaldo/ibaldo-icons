import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CartPlusRailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CartPlusRail: ForwardRefExoticComponent<CartPlusRailProps & RefAttributes<SVGSVGElement>>;

export default CartPlusRail;
export { CartPlusRail };
