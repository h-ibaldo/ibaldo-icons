import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuStripes2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuStripes2: ForwardRefExoticComponent<MenuStripes2Props & RefAttributes<SVGSVGElement>>;

export default MenuStripes2;
export { MenuStripes2 };
