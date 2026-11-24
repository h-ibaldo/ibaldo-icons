import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchXDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchXDetached: ForwardRefExoticComponent<StopwatchXDetachedProps & RefAttributes<Svg>>;

export default StopwatchXDetached;
export { StopwatchXDetached };
