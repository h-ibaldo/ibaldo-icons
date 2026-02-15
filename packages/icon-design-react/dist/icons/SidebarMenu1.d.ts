import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarMenu1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarMenu1: ForwardRefExoticComponent<SidebarMenu1Props & RefAttributes<SVGSVGElement>>;

export default SidebarMenu1;
export { SidebarMenu1 };
