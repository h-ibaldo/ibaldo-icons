import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuDots3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuDots3: ForwardRefExoticComponent<MenuDots3Props & RefAttributes<SVGSVGElement>>;

export default MenuDots3;
export { MenuDots3 };
