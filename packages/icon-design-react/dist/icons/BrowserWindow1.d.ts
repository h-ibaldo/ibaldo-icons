import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindow1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindow1: ForwardRefExoticComponent<BrowserWindow1Props & RefAttributes<SVGSVGElement>>;

export default BrowserWindow1;
export { BrowserWindow1 };
