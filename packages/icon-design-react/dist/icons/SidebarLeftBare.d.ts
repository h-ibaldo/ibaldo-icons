import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarLeftBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarLeftBare: ForwardRefExoticComponent<SidebarLeftBareProps & RefAttributes<SVGSVGElement>>;

export default SidebarLeftBare;
export { SidebarLeftBare };
