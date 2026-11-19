import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPinTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPinTick: ForwardRefExoticComponent<StopwatchPinTickProps & RefAttributes<Svg>>;

export default StopwatchPinTick;
export { StopwatchPinTick };
