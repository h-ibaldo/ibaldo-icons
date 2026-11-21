import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorPulseStandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorPulseStand: ForwardRefExoticComponent<MonitorPulseStandProps & RefAttributes<Svg>>;

export default MonitorPulseStand;
export { MonitorPulseStand };
