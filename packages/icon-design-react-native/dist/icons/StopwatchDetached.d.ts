import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchDetached: ForwardRefExoticComponent<StopwatchDetachedProps & RefAttributes<Svg>>;

export default StopwatchDetached;
export { StopwatchDetached };
