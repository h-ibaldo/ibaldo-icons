import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorStopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorStop: ForwardRefExoticComponent<MonitorStopProps & RefAttributes<Svg>>;

export default MonitorStop;
export { MonitorStop };
