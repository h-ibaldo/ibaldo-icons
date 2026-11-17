import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignal7Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignal7: ForwardRefExoticComponent<WifiSignal7Props & RefAttributes<SVGSVGElement>>;

export default WifiSignal7;
export { WifiSignal7 };
