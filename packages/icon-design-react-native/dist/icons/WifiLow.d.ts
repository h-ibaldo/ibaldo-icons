import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WifiLowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WifiLow: ForwardRefExoticComponent<WifiLowProps & RefAttributes<Svg>>;

export default WifiLow;
export { WifiLow };
