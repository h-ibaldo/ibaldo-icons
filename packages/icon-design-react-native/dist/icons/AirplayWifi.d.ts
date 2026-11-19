import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AirplayWifiProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AirplayWifi: ForwardRefExoticComponent<AirplayWifiProps & RefAttributes<Svg>>;

export default AirplayWifi;
export { AirplayWifi };
