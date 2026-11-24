import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchClockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwise: ForwardRefExoticComponent<StopwatchClockwiseProps & RefAttributes<Svg>>;

export default StopwatchClockwise;
export { StopwatchClockwise };
