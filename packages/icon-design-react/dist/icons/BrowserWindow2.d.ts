import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindow2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindow2: ForwardRefExoticComponent<BrowserWindow2Props & RefAttributes<SVGSVGElement>>;

export default BrowserWindow2;
export { BrowserWindow2 };
