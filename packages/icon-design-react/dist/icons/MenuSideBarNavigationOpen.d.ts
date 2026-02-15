import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSideBarNavigationOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSideBarNavigationOpen: ForwardRefExoticComponent<MenuSideBarNavigationOpenProps & RefAttributes<SVGSVGElement>>;

export default MenuSideBarNavigationOpen;
export { MenuSideBarNavigationOpen };
