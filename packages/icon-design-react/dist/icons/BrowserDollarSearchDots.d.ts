import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserDollarSearchDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserDollarSearchDots: ForwardRefExoticComponent<BrowserDollarSearchDotsProps & RefAttributes<SVGSVGElement>>;

export default BrowserDollarSearchDots;
export { BrowserDollarSearchDots };
