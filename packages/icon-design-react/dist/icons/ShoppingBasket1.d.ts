import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBasket1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBasket1: ForwardRefExoticComponent<ShoppingBasket1Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBasket1;
export { ShoppingBasket1 };
