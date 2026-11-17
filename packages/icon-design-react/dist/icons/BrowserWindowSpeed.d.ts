import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowSpeedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowSpeed: ForwardRefExoticComponent<BrowserWindowSpeedProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowSpeed;
export { BrowserWindowSpeed };
