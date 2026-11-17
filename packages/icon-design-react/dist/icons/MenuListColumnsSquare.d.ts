import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuListColumnsSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuListColumnsSquare: ForwardRefExoticComponent<MenuListColumnsSquareProps & RefAttributes<SVGSVGElement>>;

export default MenuListColumnsSquare;
export { MenuListColumnsSquare };
