import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWrenchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWrench: ForwardRefExoticComponent<BrowserWrenchProps & RefAttributes<SVGSVGElement>>;

export default BrowserWrench;
export { BrowserWrench };
