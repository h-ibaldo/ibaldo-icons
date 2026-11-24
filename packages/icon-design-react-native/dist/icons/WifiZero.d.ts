import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WifiZeroProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WifiZero: ForwardRefExoticComponent<WifiZeroProps & RefAttributes<Svg>>;

export default WifiZero;
export { WifiZero };
