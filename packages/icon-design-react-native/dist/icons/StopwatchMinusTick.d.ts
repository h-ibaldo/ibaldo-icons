import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchMinusTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchMinusTick: ForwardRefExoticComponent<StopwatchMinusTickProps & RefAttributes<Svg>>;

export default StopwatchMinusTick;
export { StopwatchMinusTick };
