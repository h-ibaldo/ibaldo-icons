import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignalHotspot5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignalHotspot5: ForwardRefExoticComponent<WifiSignalHotspot5Props & RefAttributes<SVGSVGElement>>;

export default WifiSignalHotspot5;
export { WifiSignalHotspot5 };
