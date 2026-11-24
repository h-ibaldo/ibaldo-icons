import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchOffDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchOffDetached: ForwardRefExoticComponent<StopwatchOffDetachedProps & RefAttributes<Svg>>;

export default StopwatchOffDetached;
export { StopwatchOffDetached };
