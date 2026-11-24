import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuNarrow: ForwardRefExoticComponent<MenuNarrowProps & RefAttributes<SVGSVGElement>>;

export default MenuNarrow;
export { MenuNarrow };
