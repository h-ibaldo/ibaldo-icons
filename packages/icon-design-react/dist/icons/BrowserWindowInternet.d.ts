import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowInternetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowInternet: ForwardRefExoticComponent<BrowserWindowInternetProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowInternet;
export { BrowserWindowInternet };
