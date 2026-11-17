import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuDashesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuDashes: ForwardRefExoticComponent<MenuDashesProps & RefAttributes<SVGSVGElement>>;

export default MenuDashes;
export { MenuDashes };
