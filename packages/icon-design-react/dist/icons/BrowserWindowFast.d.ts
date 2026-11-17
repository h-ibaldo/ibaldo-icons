import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowFastProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowFast: ForwardRefExoticComponent<BrowserWindowFastProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowFast;
export { BrowserWindowFast };
