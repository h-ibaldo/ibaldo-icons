import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Wifi: ForwardRefExoticComponent<WifiProps & RefAttributes<SVGSVGElement>>;

export default Wifi;
export { Wifi };
