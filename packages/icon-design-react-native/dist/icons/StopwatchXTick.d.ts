import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchXTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchXTick: ForwardRefExoticComponent<StopwatchXTickProps & RefAttributes<Svg>>;

export default StopwatchXTick;
export { StopwatchXTick };
