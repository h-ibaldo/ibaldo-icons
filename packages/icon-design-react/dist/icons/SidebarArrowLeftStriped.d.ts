import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarArrowLeftStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarArrowLeftStriped: ForwardRefExoticComponent<SidebarArrowLeftStripedProps & RefAttributes<SVGSVGElement>>;

export default SidebarArrowLeftStriped;
export { SidebarArrowLeftStriped };
