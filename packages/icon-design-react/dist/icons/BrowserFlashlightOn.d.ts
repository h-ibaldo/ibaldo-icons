import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserFlashlightOnProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserFlashlightOn: ForwardRefExoticComponent<BrowserFlashlightOnProps & RefAttributes<SVGSVGElement>>;

export default BrowserFlashlightOn;
export { BrowserFlashlightOn };
