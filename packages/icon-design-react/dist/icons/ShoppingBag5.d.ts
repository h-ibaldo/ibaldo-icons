import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBag5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBag5: ForwardRefExoticComponent<ShoppingBag5Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBag5;
export { ShoppingBag5 };
