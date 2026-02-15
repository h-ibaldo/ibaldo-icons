import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSideBarNavigationCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSideBarNavigationClose: ForwardRefExoticComponent<MenuSideBarNavigationCloseProps & RefAttributes<SVGSVGElement>>;

export default MenuSideBarNavigationClose;
export { MenuSideBarNavigationClose };
