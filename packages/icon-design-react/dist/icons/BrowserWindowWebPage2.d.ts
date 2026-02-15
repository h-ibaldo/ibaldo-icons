import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowWebPage2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowWebPage2: ForwardRefExoticComponent<BrowserWindowWebPage2Props & RefAttributes<SVGSVGElement>>;

export default BrowserWindowWebPage2;
export { BrowserWindowWebPage2 };
