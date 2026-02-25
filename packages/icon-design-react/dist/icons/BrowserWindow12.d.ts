import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindow12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindow12: ForwardRefExoticComponent<BrowserWindow12Props & RefAttributes<SVGSVGElement>>;

export default BrowserWindow12;
export { BrowserWindow12 };
