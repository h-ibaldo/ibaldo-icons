import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorArrowUp: ForwardRefExoticComponent<MonitorArrowUpProps & RefAttributes<Svg>>;

export default MonitorArrowUp;
export { MonitorArrowUp };
