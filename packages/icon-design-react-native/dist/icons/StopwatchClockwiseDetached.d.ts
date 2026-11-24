import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchClockwiseDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwiseDetached: ForwardRefExoticComponent<StopwatchClockwiseDetachedProps & RefAttributes<Svg>>;

export default StopwatchClockwiseDetached;
export { StopwatchClockwiseDetached };
