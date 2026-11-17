import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuShortBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuShortBottom: ForwardRefExoticComponent<MenuShortBottomProps & RefAttributes<SVGSVGElement>>;

export default MenuShortBottom;
export { MenuShortBottom };
