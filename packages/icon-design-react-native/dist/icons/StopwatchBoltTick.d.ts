import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchBoltTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchBoltTick: ForwardRefExoticComponent<StopwatchBoltTickProps & RefAttributes<Svg>>;

export default StopwatchBoltTick;
export { StopwatchBoltTick };
