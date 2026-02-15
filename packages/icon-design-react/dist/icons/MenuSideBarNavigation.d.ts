import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSideBarNavigationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSideBarNavigation: ForwardRefExoticComponent<MenuSideBarNavigationProps & RefAttributes<SVGSVGElement>>;

export default MenuSideBarNavigation;
export { MenuSideBarNavigation };
