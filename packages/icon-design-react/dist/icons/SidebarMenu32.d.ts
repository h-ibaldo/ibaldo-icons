import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarMenu32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarMenu32: ForwardRefExoticComponent<SidebarMenu32Props & RefAttributes<SVGSVGElement>>;

export default SidebarMenu32;
export { SidebarMenu32 };
