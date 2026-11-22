import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuDescendingRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuDescendingRight: ForwardRefExoticComponent<MenuDescendingRightProps & RefAttributes<SVGSVGElement>>;

export default MenuDescendingRight;
export { MenuDescendingRight };
