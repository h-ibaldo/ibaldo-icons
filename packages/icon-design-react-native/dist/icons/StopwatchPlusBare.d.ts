import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPlusBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPlusBare: ForwardRefExoticComponent<StopwatchPlusBareProps & RefAttributes<Svg>>;

export default StopwatchPlusBare;
export { StopwatchPlusBare };
