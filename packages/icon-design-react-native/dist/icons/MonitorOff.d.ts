import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorOff: ForwardRefExoticComponent<MonitorOffProps & RefAttributes<Svg>>;

export default MonitorOff;
export { MonitorOff };
