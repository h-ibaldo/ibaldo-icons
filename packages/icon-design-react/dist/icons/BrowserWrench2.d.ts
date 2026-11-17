import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWrench2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWrench2: ForwardRefExoticComponent<BrowserWrench2Props & RefAttributes<SVGSVGElement>>;

export default BrowserWrench2;
export { BrowserWrench2 };
