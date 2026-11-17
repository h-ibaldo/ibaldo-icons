import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignal5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignal5: ForwardRefExoticComponent<WifiSignal5Props & RefAttributes<SVGSVGElement>>;

export default WifiSignal5;
export { WifiSignal5 };
