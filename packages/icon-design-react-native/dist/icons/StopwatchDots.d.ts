import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchDots: ForwardRefExoticComponent<StopwatchDotsProps & RefAttributes<Svg>>;

export default StopwatchDots;
export { StopwatchDots };
