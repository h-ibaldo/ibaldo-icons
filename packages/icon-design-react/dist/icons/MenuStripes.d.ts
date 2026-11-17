import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuStripes: ForwardRefExoticComponent<MenuStripesProps & RefAttributes<SVGSVGElement>>;

export default MenuStripes;
export { MenuStripes };
