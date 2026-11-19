import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchAlertDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchAlertDetached: ForwardRefExoticComponent<StopwatchAlertDetachedProps & RefAttributes<Svg>>;

export default StopwatchAlertDetached;
export { StopwatchAlertDetached };
