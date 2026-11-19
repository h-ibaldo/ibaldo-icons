import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPieTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPieTick: ForwardRefExoticComponent<StopwatchPieTickProps & RefAttributes<Svg>>;

export default StopwatchPieTick;
export { StopwatchPieTick };
