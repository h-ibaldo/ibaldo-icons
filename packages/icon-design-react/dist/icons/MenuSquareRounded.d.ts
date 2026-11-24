import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuSquareRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuSquareRounded: ForwardRefExoticComponent<MenuSquareRoundedProps & RefAttributes<SVGSVGElement>>;

export default MenuSquareRounded;
export { MenuSquareRounded };
