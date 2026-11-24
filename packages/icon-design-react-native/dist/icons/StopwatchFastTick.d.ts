import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchFastTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchFastTick: ForwardRefExoticComponent<StopwatchFastTickProps & RefAttributes<Svg>>;

export default StopwatchFastTick;
export { StopwatchFastTick };
