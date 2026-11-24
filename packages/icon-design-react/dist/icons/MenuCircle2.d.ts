import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuCircle2: ForwardRefExoticComponent<MenuCircle2Props & RefAttributes<SVGSVGElement>>;

export default MenuCircle2;
export { MenuCircle2 };
