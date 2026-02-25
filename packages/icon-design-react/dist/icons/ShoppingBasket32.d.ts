import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBasket32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBasket32: ForwardRefExoticComponent<ShoppingBasket32Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBasket32;
export { ShoppingBasket32 };
