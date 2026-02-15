import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignalHotspot4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignalHotspot4: ForwardRefExoticComponent<WifiSignalHotspot4Props & RefAttributes<SVGSVGElement>>;

export default WifiSignalHotspot4;
export { WifiSignalHotspot4 };
