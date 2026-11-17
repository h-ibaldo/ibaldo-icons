import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowLaunchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowLaunch: ForwardRefExoticComponent<BrowserWindowLaunchProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowLaunch;
export { BrowserWindowLaunch };
