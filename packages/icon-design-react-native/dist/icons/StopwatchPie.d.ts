import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPieProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPie: ForwardRefExoticComponent<StopwatchPieProps & RefAttributes<Svg>>;

export default StopwatchPie;
export { StopwatchPie };
