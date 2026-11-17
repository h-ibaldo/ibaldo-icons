import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuTwoLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuTwoLines: ForwardRefExoticComponent<MenuTwoLinesProps & RefAttributes<SVGSVGElement>>;

export default MenuTwoLines;
export { MenuTwoLines };
