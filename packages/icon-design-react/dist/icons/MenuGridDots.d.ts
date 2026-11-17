import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuGridDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuGridDots: ForwardRefExoticComponent<MenuGridDotsProps & RefAttributes<SVGSVGElement>>;

export default MenuGridDots;
export { MenuGridDots };
