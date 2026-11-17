import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowLaunch2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowLaunch2: ForwardRefExoticComponent<BrowserWindowLaunch2Props & RefAttributes<SVGSVGElement>>;

export default BrowserWindowLaunch2;
export { BrowserWindowLaunch2 };
