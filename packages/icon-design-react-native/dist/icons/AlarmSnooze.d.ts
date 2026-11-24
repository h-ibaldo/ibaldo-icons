import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmSnoozeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmSnooze: ForwardRefExoticComponent<AlarmSnoozeProps & RefAttributes<Svg>>;

export default AlarmSnooze;
export { AlarmSnooze };
