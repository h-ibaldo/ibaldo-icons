import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPlusTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPlusTick: ForwardRefExoticComponent<StopwatchPlusTickProps & RefAttributes<Svg>>;

export default StopwatchPlusTick;
export { StopwatchPlusTick };
