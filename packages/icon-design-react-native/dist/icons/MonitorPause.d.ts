import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorPauseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorPause: ForwardRefExoticComponent<MonitorPauseProps & RefAttributes<Svg>>;

export default MonitorPause;
export { MonitorPause };
