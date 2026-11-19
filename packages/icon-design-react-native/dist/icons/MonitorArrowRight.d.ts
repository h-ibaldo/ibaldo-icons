import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorArrowRight: ForwardRefExoticComponent<MonitorArrowRightProps & RefAttributes<Svg>>;

export default MonitorArrowRight;
export { MonitorArrowRight };
