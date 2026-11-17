import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserShieldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserShield: ForwardRefExoticComponent<BrowserShieldProps & RefAttributes<SVGSVGElement>>;

export default BrowserShield;
export { BrowserShield };
