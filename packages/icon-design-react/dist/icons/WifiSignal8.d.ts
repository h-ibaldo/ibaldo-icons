import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSignal8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSignal8: ForwardRefExoticComponent<WifiSignal8Props & RefAttributes<SVGSVGElement>>;

export default WifiSignal8;
export { WifiSignal8 };
