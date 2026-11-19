import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchX: ForwardRefExoticComponent<StopwatchXProps & RefAttributes<Svg>>;

export default StopwatchX;
export { StopwatchX };
