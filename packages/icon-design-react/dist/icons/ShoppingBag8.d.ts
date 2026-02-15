import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBag8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBag8: ForwardRefExoticComponent<ShoppingBag8Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBag8;
export { ShoppingBag8 };
