import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuGridSquaresSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuGridSquaresSmall: ForwardRefExoticComponent<MenuGridSquaresSmallProps & RefAttributes<SVGSVGElement>>;

export default MenuGridSquaresSmall;
export { MenuGridSquaresSmall };
