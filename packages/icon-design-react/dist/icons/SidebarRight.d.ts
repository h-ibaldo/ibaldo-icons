import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarRight: ForwardRefExoticComponent<SidebarRightProps & RefAttributes<SVGSVGElement>>;

export default SidebarRight;
export { SidebarRight };
