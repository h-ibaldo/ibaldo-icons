import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarRightBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarRightBare: ForwardRefExoticComponent<SidebarRightBareProps & RefAttributes<SVGSVGElement>>;

export default SidebarRightBare;
export { SidebarRightBare };
