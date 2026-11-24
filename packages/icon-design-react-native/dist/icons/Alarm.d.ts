import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Alarm: ForwardRefExoticComponent<AlarmProps & RefAttributes<Svg>>;

export default Alarm;
export { Alarm };
