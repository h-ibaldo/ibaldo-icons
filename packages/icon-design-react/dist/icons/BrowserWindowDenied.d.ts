import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowDeniedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowDenied: ForwardRefExoticComponent<BrowserWindowDeniedProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowDenied;
export { BrowserWindowDenied };
