import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorArrowUpRight: ForwardRefExoticComponent<MonitorArrowUpRightProps & RefAttributes<Svg>>;

export default MonitorArrowUpRight;
export { MonitorArrowUpRight };
