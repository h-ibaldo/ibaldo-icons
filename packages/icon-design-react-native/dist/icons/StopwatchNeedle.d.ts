import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchNeedleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchNeedle: ForwardRefExoticComponent<StopwatchNeedleProps & RefAttributes<Svg>>;

export default StopwatchNeedle;
export { StopwatchNeedle };
