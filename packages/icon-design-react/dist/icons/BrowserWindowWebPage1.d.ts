import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowWebPage1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowWebPage1: ForwardRefExoticComponent<BrowserWindowWebPage1Props & RefAttributes<SVGSVGElement>>;

export default BrowserWindowWebPage1;
export { BrowserWindowWebPage1 };
