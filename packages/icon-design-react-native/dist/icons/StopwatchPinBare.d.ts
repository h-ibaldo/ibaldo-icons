import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPinBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPinBare: ForwardRefExoticComponent<StopwatchPinBareProps & RefAttributes<Svg>>;

export default StopwatchPinBare;
export { StopwatchPinBare };
