import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuThreeStripesCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuThreeStripesCircle: ForwardRefExoticComponent<MenuThreeStripesCircleProps & RefAttributes<SVGSVGElement>>;

export default MenuThreeStripesCircle;
export { MenuThreeStripesCircle };
