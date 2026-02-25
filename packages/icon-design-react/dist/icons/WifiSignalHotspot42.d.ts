import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignalHotspot42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignalHotspot42: ForwardRefExoticComponent<WifiSignalHotspot42Props & RefAttributes<SVGSVGElement>>;

export default WifiSignalHotspot42;
export { WifiSignalHotspot42 };
