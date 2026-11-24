import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WifiProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Wifi: ForwardRefExoticComponent<WifiProps & RefAttributes<Svg>>;

export default Wifi;
export { Wifi };
