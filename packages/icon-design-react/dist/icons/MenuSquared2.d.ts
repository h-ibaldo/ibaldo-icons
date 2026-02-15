import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSquared2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSquared2: ForwardRefExoticComponent<MenuSquared2Props & RefAttributes<SVGSVGElement>>;

export default MenuSquared2;
export { MenuSquared2 };
