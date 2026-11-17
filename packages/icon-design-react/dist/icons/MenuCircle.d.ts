import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuCircle: ForwardRefExoticComponent<MenuCircleProps & RefAttributes<SVGSVGElement>>;

export default MenuCircle;
export { MenuCircle };
