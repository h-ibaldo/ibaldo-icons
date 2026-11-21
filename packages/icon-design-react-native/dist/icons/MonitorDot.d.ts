import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorDot: ForwardRefExoticComponent<MonitorDotProps & RefAttributes<Svg>>;

export default MonitorDot;
export { MonitorDot };
