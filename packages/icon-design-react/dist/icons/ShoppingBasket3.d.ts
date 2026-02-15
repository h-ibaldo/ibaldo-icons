import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBasket3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBasket3: ForwardRefExoticComponent<ShoppingBasket3Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBasket3;
export { ShoppingBasket3 };
