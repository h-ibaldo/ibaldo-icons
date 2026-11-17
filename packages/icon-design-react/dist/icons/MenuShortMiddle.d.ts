import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuShortMiddleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuShortMiddle: ForwardRefExoticComponent<MenuShortMiddleProps & RefAttributes<SVGSVGElement>>;

export default MenuShortMiddle;
export { MenuShortMiddle };
