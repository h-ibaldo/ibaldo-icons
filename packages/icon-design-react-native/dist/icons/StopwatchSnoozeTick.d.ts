import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchSnoozeTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchSnoozeTick: ForwardRefExoticComponent<StopwatchSnoozeTickProps & RefAttributes<Svg>>;

export default StopwatchSnoozeTick;
export { StopwatchSnoozeTick };
