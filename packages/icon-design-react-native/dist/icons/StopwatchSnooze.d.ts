import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchSnoozeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchSnooze: ForwardRefExoticComponent<StopwatchSnoozeProps & RefAttributes<Svg>>;

export default StopwatchSnooze;
export { StopwatchSnooze };
