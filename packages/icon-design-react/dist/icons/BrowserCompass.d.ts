import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserCompassProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserCompass: ForwardRefExoticComponent<BrowserCompassProps & RefAttributes<SVGSVGElement>>;

export default BrowserCompass;
export { BrowserCompass };
