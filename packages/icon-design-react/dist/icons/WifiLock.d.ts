import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiLock: ForwardRefExoticComponent<WifiLockProps & RefAttributes<SVGSVGElement>>;

export default WifiLock;
export { WifiLock };
