import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuCirclesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuCircles: ForwardRefExoticComponent<MenuCirclesProps & RefAttributes<SVGSVGElement>>;

export default MenuCircles;
export { MenuCircles };
