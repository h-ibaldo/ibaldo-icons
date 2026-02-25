import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBag32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBag32: ForwardRefExoticComponent<ShoppingBag32Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBag32;
export { ShoppingBag32 };
