import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowWebProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowWeb: ForwardRefExoticComponent<BrowserWindowWebProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowWeb;
export { BrowserWindowWeb };
