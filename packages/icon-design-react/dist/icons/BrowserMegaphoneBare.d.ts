import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserMegaphoneBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserMegaphoneBare: ForwardRefExoticComponent<BrowserMegaphoneBareProps & RefAttributes<SVGSVGElement>>;

export default BrowserMegaphoneBare;
export { BrowserMegaphoneBare };
