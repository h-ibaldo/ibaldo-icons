import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuTightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuTight: ForwardRefExoticComponent<MenuTightProps & RefAttributes<SVGSVGElement>>;

export default MenuTight;
export { MenuTight };
