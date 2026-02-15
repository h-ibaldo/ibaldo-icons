import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBag1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBag1: ForwardRefExoticComponent<ShoppingBag1Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBag1;
export { ShoppingBag1 };
