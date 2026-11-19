import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchMinusBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchMinusBare: ForwardRefExoticComponent<StopwatchMinusBareProps & RefAttributes<Svg>>;

export default StopwatchMinusBare;
export { StopwatchMinusBare };
