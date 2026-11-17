import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserFastProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserFast: ForwardRefExoticComponent<BrowserFastProps & RefAttributes<SVGSVGElement>>;

export default BrowserFast;
export { BrowserFast };
