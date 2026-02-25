import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuCircles2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuCircles2: ForwardRefExoticComponent<MenuCircles2Props & RefAttributes<SVGSVGElement>>;

export default MenuCircles2;
export { MenuCircles2 };
