import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowSidebarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowSidebar: ForwardRefExoticComponent<BrowserWindowSidebarProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowSidebar;
export { BrowserWindowSidebar };
