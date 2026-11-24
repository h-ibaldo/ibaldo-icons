import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserSearch: ForwardRefExoticComponent<BrowserSearchProps & RefAttributes<SVGSVGElement>>;

export default BrowserSearch;
export { BrowserSearch };
