import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuHamburger1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuHamburger1: ForwardRefExoticComponent<MenuHamburger1Props & RefAttributes<SVGSVGElement>>;

export default MenuHamburger1;
export { MenuHamburger1 };
