import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserHeartCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserHeartCenter: ForwardRefExoticComponent<BrowserHeartCenterProps & RefAttributes<SVGSVGElement>>;

export default BrowserHeartCenter;
export { BrowserHeartCenter };
