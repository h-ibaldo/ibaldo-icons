import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPlus: ForwardRefExoticComponent<StopwatchPlusProps & RefAttributes<Svg>>;

export default StopwatchPlus;
export { StopwatchPlus };
