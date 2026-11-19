import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchDottedBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchDottedBare: ForwardRefExoticComponent<StopwatchDottedBareProps & RefAttributes<Svg>>;

export default StopwatchDottedBare;
export { StopwatchDottedBare };
