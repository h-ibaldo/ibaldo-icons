import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserArrowUp: ForwardRefExoticComponent<BrowserArrowUpProps & RefAttributes<SVGSVGElement>>;

export default BrowserArrowUp;
export { BrowserArrowUp };
