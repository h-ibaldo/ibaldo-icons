import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignal9Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignal9: ForwardRefExoticComponent<WifiSignal9Props & RefAttributes<SVGSVGElement>>;

export default WifiSignal9;
export { WifiSignal9 };
