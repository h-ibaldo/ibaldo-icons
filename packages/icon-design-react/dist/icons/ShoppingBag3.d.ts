import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShoppingBag3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShoppingBag3: ForwardRefExoticComponent<ShoppingBag3Props & RefAttributes<SVGSVGElement>>;

export default ShoppingBag3;
export { ShoppingBag3 };
