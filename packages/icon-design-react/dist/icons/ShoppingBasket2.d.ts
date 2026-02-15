import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBasket2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBasket2: ForwardRefExoticComponent<ShoppingBasket2Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBasket2;
export { ShoppingBasket2 };
