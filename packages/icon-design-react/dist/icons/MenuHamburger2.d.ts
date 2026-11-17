import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuHamburger2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuHamburger2: ForwardRefExoticComponent<MenuHamburger2Props & RefAttributes<SVGSVGElement>>;

export default MenuHamburger2;
export { MenuHamburger2 };
