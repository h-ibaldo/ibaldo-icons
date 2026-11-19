import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchBoltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchBolt: ForwardRefExoticComponent<StopwatchBoltProps & RefAttributes<Svg>>;

export default StopwatchBolt;
export { StopwatchBolt };
