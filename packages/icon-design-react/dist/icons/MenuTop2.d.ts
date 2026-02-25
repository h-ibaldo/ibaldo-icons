import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuTop2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuTop2: ForwardRefExoticComponent<MenuTop2Props & RefAttributes<SVGSVGElement>>;

export default MenuTop2;
export { MenuTop2 };
