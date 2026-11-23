import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiLowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiLow: ForwardRefExoticComponent<WifiLowProps & RefAttributes<SVGSVGElement>>;

export default WifiLow;
export { WifiLow };
