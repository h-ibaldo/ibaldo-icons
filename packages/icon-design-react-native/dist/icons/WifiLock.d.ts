import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WifiLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WifiLock: ForwardRefExoticComponent<WifiLockProps & RefAttributes<Svg>>;

export default WifiLock;
export { WifiLock };
