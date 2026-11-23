import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSync: ForwardRefExoticComponent<WifiSyncProps & RefAttributes<SVGSVGElement>>;

export default WifiSync;
export { WifiSync };
