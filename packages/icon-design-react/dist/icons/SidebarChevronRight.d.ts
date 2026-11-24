import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarChevronRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarChevronRight: ForwardRefExoticComponent<SidebarChevronRightProps & RefAttributes<SVGSVGElement>>;

export default SidebarChevronRight;
export { SidebarChevronRight };
