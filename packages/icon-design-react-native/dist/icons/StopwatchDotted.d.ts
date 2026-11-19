import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchDotted: ForwardRefExoticComponent<StopwatchDottedProps & RefAttributes<Svg>>;

export default StopwatchDotted;
export { StopwatchDotted };
