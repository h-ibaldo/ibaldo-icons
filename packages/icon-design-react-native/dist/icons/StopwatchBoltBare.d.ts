import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchBoltBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchBoltBare: ForwardRefExoticComponent<StopwatchBoltBareProps & RefAttributes<Svg>>;

export default StopwatchBoltBare;
export { StopwatchBoltBare };
