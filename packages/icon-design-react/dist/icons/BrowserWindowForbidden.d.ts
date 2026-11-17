import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowForbiddenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowForbidden: ForwardRefExoticComponent<BrowserWindowForbiddenProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowForbidden;
export { BrowserWindowForbidden };
