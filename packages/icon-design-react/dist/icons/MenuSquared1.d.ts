import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSquared1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSquared1: ForwardRefExoticComponent<MenuSquared1Props & RefAttributes<SVGSVGElement>>;

export default MenuSquared1;
export { MenuSquared1 };
