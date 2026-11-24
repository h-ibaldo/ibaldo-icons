import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchBoltDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchBoltDetached: ForwardRefExoticComponent<StopwatchBoltDetachedProps & RefAttributes<Svg>>;

export default StopwatchBoltDetached;
export { StopwatchBoltDetached };
