import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchXBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchXBare: ForwardRefExoticComponent<StopwatchXBareProps & RefAttributes<Svg>>;

export default StopwatchXBare;
export { StopwatchXBare };
