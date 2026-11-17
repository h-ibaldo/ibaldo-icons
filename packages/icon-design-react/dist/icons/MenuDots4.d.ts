import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuDots4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuDots4: ForwardRefExoticComponent<MenuDots4Props & RefAttributes<SVGSVGElement>>;

export default MenuDots4;
export { MenuDots4 };
