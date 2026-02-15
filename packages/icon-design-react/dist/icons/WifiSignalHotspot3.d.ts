import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignalHotspot3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignalHotspot3: ForwardRefExoticComponent<WifiSignalHotspot3Props & RefAttributes<SVGSVGElement>>;

export default WifiSignalHotspot3;
export { WifiSignalHotspot3 };
