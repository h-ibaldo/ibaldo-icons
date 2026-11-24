import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserDollarSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserDollarSearch: ForwardRefExoticComponent<BrowserDollarSearchProps & RefAttributes<SVGSVGElement>>;

export default BrowserDollarSearch;
export { BrowserDollarSearch };
