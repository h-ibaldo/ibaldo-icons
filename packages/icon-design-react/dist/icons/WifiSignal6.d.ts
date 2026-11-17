import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignal6Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignal6: ForwardRefExoticComponent<WifiSignal6Props & RefAttributes<SVGSVGElement>>;

export default WifiSignal6;
export { WifiSignal6 };
