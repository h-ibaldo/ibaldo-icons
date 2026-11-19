import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPin: ForwardRefExoticComponent<StopwatchPinProps & RefAttributes<Svg>>;

export default StopwatchPin;
export { StopwatchPin };
