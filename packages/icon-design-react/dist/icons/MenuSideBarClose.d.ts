import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSideBarCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSideBarClose: ForwardRefExoticComponent<MenuSideBarCloseProps & RefAttributes<SVGSVGElement>>;

export default MenuSideBarClose;
export { MenuSideBarClose };
