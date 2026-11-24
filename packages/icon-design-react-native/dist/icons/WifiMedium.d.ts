import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WifiMediumProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WifiMedium: ForwardRefExoticComponent<WifiMediumProps & RefAttributes<Svg>>;

export default WifiMedium;
export { WifiMedium };
