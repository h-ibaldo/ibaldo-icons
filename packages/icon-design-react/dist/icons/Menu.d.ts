import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Menu: ForwardRefExoticComponent<MenuProps & RefAttributes<SVGSVGElement>>;

export default Menu;
export { Menu };
