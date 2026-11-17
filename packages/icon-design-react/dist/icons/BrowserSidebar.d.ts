import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserSidebarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserSidebar: ForwardRefExoticComponent<BrowserSidebarProps & RefAttributes<SVGSVGElement>>;

export default BrowserSidebar;
export { BrowserSidebar };
