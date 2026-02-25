import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBag42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBag42: ForwardRefExoticComponent<ShoppingBag42Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBag42;
export { ShoppingBag42 };
