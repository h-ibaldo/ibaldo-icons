import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiMediumProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiMedium: ForwardRefExoticComponent<WifiMediumProps & RefAttributes<SVGSVGElement>>;

export default WifiMedium;
export { WifiMedium };
