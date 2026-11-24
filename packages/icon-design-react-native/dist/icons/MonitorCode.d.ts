import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorCodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorCode: ForwardRefExoticComponent<MonitorCodeProps & RefAttributes<Svg>>;

export default MonitorCode;
export { MonitorCode };
