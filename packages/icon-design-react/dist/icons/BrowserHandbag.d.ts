import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserHandbagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserHandbag: ForwardRefExoticComponent<BrowserHandbagProps & RefAttributes<SVGSVGElement>>;

export default BrowserHandbag;
export { BrowserHandbag };
