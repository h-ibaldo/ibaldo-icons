import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorPlayProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorPlay: ForwardRefExoticComponent<MonitorPlayProps & RefAttributes<Svg>>;

export default MonitorPlay;
export { MonitorPlay };
