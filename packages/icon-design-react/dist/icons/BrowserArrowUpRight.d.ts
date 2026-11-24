import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserArrowUpRight: ForwardRefExoticComponent<BrowserArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default BrowserArrowUpRight;
export { BrowserArrowUpRight };
