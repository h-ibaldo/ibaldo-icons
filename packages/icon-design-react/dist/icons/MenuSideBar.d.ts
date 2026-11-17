import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSideBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSideBar: ForwardRefExoticComponent<MenuSideBarProps & RefAttributes<SVGSVGElement>>;

export default MenuSideBar;
export { MenuSideBar };
