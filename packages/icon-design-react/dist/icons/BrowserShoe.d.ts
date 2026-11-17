import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserShoeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserShoe: ForwardRefExoticComponent<BrowserShoeProps & RefAttributes<SVGSVGElement>>;

export default BrowserShoe;
export { BrowserShoe };
