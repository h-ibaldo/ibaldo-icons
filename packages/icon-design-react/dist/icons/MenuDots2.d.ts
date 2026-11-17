import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuDots2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuDots2: ForwardRefExoticComponent<MenuDots2Props & RefAttributes<SVGSVGElement>>;

export default MenuDots2;
export { MenuDots2 };
