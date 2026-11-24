import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchOffBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchOffBare: ForwardRefExoticComponent<StopwatchOffBareProps & RefAttributes<Svg>>;

export default StopwatchOffBare;
export { StopwatchOffBare };
