import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarLeft: ForwardRefExoticComponent<SidebarLeftProps & RefAttributes<SVGSVGElement>>;

export default SidebarLeft;
export { SidebarLeft };
