import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuGridSquaresProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuGridSquares: ForwardRefExoticComponent<MenuGridSquaresProps & RefAttributes<SVGSVGElement>>;

export default MenuGridSquares;
export { MenuGridSquares };
