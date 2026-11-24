import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiZeroProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiZero: ForwardRefExoticComponent<WifiZeroProps & RefAttributes<SVGSVGElement>>;

export default WifiZero;
export { WifiZero };
