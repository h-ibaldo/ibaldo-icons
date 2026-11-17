import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuDescendingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuDescending: ForwardRefExoticComponent<MenuDescendingProps & RefAttributes<SVGSVGElement>>;

export default MenuDescending;
export { MenuDescending };
