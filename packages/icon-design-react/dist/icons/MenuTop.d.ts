import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuTop: ForwardRefExoticComponent<MenuTopProps & RefAttributes<SVGSVGElement>>;

export default MenuTop;
export { MenuTop };
