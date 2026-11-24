import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuCompact: ForwardRefExoticComponent<MenuCompactProps & RefAttributes<SVGSVGElement>>;

export default MenuCompact;
export { MenuCompact };
