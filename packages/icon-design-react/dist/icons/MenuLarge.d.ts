import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuLarge: ForwardRefExoticComponent<MenuLargeProps & RefAttributes<SVGSVGElement>>;

export default MenuLarge;
export { MenuLarge };
