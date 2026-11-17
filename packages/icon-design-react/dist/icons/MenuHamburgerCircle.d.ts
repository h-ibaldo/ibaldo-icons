import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuHamburgerCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuHamburgerCircle: ForwardRefExoticComponent<MenuHamburgerCircleProps & RefAttributes<SVGSVGElement>>;

export default MenuHamburgerCircle;
export { MenuHamburgerCircle };
