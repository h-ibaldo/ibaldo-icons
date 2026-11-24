import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorXCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorXCorner: ForwardRefExoticComponent<MonitorXCornerProps & RefAttributes<Svg>>;

export default MonitorXCorner;
export { MonitorXCorner };
