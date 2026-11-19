import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchTick: ForwardRefExoticComponent<StopwatchTickProps & RefAttributes<Svg>>;

export default StopwatchTick;
export { StopwatchTick };
