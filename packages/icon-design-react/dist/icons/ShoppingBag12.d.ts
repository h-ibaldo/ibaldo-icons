import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBag12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBag12: ForwardRefExoticComponent<ShoppingBag12Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBag12;
export { ShoppingBag12 };
