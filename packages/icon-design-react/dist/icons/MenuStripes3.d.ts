import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuStripes3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuStripes3: ForwardRefExoticComponent<MenuStripes3Props & RefAttributes<SVGSVGElement>>;

export default MenuStripes3;
export { MenuStripes3 };
