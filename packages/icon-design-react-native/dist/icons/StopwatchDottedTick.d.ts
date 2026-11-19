import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchDottedTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchDottedTick: ForwardRefExoticComponent<StopwatchDottedTickProps & RefAttributes<Svg>>;

export default StopwatchDottedTick;
export { StopwatchDottedTick };
