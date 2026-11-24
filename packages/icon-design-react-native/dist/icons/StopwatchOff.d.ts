import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchOff: ForwardRefExoticComponent<StopwatchOffProps & RefAttributes<Svg>>;

export default StopwatchOff;
export { StopwatchOff };
