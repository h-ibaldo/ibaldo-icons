import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorCloudProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorCloud: ForwardRefExoticComponent<MonitorCloudProps & RefAttributes<Svg>>;

export default MonitorCloud;
export { MonitorCloud };
