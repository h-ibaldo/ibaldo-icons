import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignalHotspot2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignalHotspot2: ForwardRefExoticComponent<WifiSignalHotspot2Props & RefAttributes<SVGSVGElement>>;

export default WifiSignalHotspot2;
export { WifiSignalHotspot2 };
