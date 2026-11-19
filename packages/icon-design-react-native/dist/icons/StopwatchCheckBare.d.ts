import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchCheckBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchCheckBare: ForwardRefExoticComponent<StopwatchCheckBareProps & RefAttributes<Svg>>;

export default StopwatchCheckBare;
export { StopwatchCheckBare };
