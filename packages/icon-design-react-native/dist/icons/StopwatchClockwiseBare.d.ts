import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchClockwiseBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwiseBare: ForwardRefExoticComponent<StopwatchClockwiseBareProps & RefAttributes<Svg>>;

export default StopwatchClockwiseBare;
export { StopwatchClockwiseBare };
