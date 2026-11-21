import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Monitor: ForwardRefExoticComponent<MonitorProps & RefAttributes<Svg>>;

export default Monitor;
export { Monitor };
