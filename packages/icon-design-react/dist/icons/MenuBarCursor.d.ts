import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuBarCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuBarCursor: ForwardRefExoticComponent<MenuBarCursorProps & RefAttributes<SVGSVGElement>>;

export default MenuBarCursor;
export { MenuBarCursor };
