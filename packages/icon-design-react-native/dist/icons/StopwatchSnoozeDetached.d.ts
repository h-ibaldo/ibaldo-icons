import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchSnoozeDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchSnoozeDetached: ForwardRefExoticComponent<StopwatchSnoozeDetachedProps & RefAttributes<Svg>>;

export default StopwatchSnoozeDetached;
export { StopwatchSnoozeDetached };
