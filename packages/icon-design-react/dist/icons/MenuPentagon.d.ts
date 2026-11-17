import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuPentagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuPentagon: ForwardRefExoticComponent<MenuPentagonProps & RefAttributes<SVGSVGElement>>;

export default MenuPentagon;
export { MenuPentagon };
