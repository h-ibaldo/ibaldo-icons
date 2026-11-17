import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuListSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuListSquare: ForwardRefExoticComponent<MenuListSquareProps & RefAttributes<SVGSVGElement>>;

export default MenuListSquare;
export { MenuListSquare };
