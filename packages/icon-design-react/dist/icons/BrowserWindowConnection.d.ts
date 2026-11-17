import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowConnectionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowConnection: ForwardRefExoticComponent<BrowserWindowConnectionProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowConnection;
export { BrowserWindowConnection };
