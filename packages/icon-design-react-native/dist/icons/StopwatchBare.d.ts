import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchBare: ForwardRefExoticComponent<StopwatchBareProps & RefAttributes<Svg>>;

export default StopwatchBare;
export { StopwatchBare };
