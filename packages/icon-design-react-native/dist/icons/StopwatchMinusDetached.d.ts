import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchMinusDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchMinusDetached: ForwardRefExoticComponent<StopwatchMinusDetachedProps & RefAttributes<Svg>>;

export default StopwatchMinusDetached;
export { StopwatchMinusDetached };
