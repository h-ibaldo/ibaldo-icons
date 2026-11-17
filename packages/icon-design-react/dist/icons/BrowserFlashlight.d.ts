import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserFlashlightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserFlashlight: ForwardRefExoticComponent<BrowserFlashlightProps & RefAttributes<SVGSVGElement>>;

export default BrowserFlashlight;
export { BrowserFlashlight };
