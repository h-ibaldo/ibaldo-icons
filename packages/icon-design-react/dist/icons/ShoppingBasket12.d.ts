import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBasket12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBasket12: ForwardRefExoticComponent<ShoppingBasket12Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBasket12;
export { ShoppingBasket12 };
