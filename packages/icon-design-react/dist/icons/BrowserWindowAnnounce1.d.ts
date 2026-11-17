import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowAnnounce1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowAnnounce1: ForwardRefExoticComponent<BrowserWindowAnnounce1Props & RefAttributes<SVGSVGElement>>;

export default BrowserWindowAnnounce1;
export { BrowserWindowAnnounce1 };
