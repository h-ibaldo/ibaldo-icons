import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchMinus: ForwardRefExoticComponent<StopwatchMinusProps & RefAttributes<Svg>>;

export default StopwatchMinus;
export { StopwatchMinus };
