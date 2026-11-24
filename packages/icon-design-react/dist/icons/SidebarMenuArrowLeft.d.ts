import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarMenuArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarMenuArrowLeft: ForwardRefExoticComponent<SidebarMenuArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default SidebarMenuArrowLeft;
export { SidebarMenuArrowLeft };
