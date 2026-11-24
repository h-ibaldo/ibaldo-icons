import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorArrowDown: ForwardRefExoticComponent<MonitorArrowDownProps & RefAttributes<Svg>>;

export default MonitorArrowDown;
export { MonitorArrowDown };
