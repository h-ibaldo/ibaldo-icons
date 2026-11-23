import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WifiSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WifiSync: ForwardRefExoticComponent<WifiSyncProps & RefAttributes<Svg>>;

export default WifiSync;
export { WifiSync };
