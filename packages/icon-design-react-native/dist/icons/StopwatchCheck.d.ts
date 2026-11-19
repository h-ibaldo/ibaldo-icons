import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchCheck: ForwardRefExoticComponent<StopwatchCheckProps & RefAttributes<Svg>>;

export default StopwatchCheck;
export { StopwatchCheck };
