import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSquare: ForwardRefExoticComponent<MenuSquareProps & RefAttributes<SVGSVGElement>>;

export default MenuSquare;
export { MenuSquare };
