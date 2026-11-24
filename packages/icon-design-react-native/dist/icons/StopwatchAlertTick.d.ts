import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchAlertTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchAlertTick: ForwardRefExoticComponent<StopwatchAlertTickProps & RefAttributes<Svg>>;

export default StopwatchAlertTick;
export { StopwatchAlertTick };
