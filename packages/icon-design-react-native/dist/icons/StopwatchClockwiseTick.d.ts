import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchClockwiseTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwiseTick: ForwardRefExoticComponent<StopwatchClockwiseTickProps & RefAttributes<Svg>>;

export default StopwatchClockwiseTick;
export { StopwatchClockwiseTick };
