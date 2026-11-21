import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorX: ForwardRefExoticComponent<MonitorXProps & RefAttributes<Svg>>;

export default MonitorX;
export { MonitorX };
