import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarArrowRight: ForwardRefExoticComponent<SidebarArrowRightProps & RefAttributes<SVGSVGElement>>;

export default SidebarArrowRight;
export { SidebarArrowRight };
