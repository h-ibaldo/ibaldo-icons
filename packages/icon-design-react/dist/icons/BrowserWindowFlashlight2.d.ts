import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowFlashlight2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowFlashlight2: ForwardRefExoticComponent<BrowserWindowFlashlight2Props & RefAttributes<SVGSVGElement>>;

export default BrowserWindowFlashlight2;
export { BrowserWindowFlashlight2 };
