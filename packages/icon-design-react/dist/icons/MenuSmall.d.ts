import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSmall: ForwardRefExoticComponent<MenuSmallProps & RefAttributes<SVGSVGElement>>;

export default MenuSmall;
export { MenuSmall };
