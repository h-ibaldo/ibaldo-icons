import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarMenu2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarMenu2: ForwardRefExoticComponent<SidebarMenu2Props & RefAttributes<SVGSVGElement>>;

export default SidebarMenu2;
export { SidebarMenu2 };
