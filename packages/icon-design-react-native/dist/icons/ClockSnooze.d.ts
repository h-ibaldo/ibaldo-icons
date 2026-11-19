import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockSnoozeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockSnooze: ForwardRefExoticComponent<ClockSnoozeProps & RefAttributes<Svg>>;

export default ClockSnooze;
export { ClockSnooze };
