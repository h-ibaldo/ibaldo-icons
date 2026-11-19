import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmSnoozeArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmSnoozeArc: ForwardRefExoticComponent<AlarmSnoozeArcProps & RefAttributes<Svg>>;

export default AlarmSnoozeArc;
export { AlarmSnoozeArc };
