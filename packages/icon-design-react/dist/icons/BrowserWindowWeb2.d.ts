import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowWeb2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowWeb2: ForwardRefExoticComponent<BrowserWindowWeb2Props & RefAttributes<SVGSVGElement>>;

export default BrowserWindowWeb2;
export { BrowserWindowWeb2 };
