import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorPulseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorPulse: ForwardRefExoticComponent<MonitorPulseProps & RefAttributes<Svg>>;

export default MonitorPulse;
export { MonitorPulse };
