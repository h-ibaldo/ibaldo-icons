import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPinDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPinDetached: ForwardRefExoticComponent<StopwatchPinDetachedProps & RefAttributes<Svg>>;

export default StopwatchPinDetached;
export { StopwatchPinDetached };
