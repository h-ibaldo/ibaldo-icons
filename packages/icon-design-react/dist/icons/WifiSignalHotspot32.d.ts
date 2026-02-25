import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignalHotspot32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignalHotspot32: ForwardRefExoticComponent<WifiSignalHotspot32Props & RefAttributes<SVGSVGElement>>;

export default WifiSignalHotspot32;
export { WifiSignalHotspot32 };
