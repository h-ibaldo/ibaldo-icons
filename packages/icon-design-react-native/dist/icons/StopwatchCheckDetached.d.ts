import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchCheckDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchCheckDetached: ForwardRefExoticComponent<StopwatchCheckDetachedProps & RefAttributes<Svg>>;

export default StopwatchCheckDetached;
export { StopwatchCheckDetached };
