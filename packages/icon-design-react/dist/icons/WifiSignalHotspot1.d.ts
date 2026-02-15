import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignalHotspot1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignalHotspot1: ForwardRefExoticComponent<WifiSignalHotspot1Props & RefAttributes<SVGSVGElement>>;

export default WifiSignalHotspot1;
export { WifiSignalHotspot1 };
