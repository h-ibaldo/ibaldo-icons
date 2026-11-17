import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSideBarOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSideBarOpen: ForwardRefExoticComponent<MenuSideBarOpenProps & RefAttributes<SVGSVGElement>>;

export default MenuSideBarOpen;
export { MenuSideBarOpen };
