import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPieBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPieBare: ForwardRefExoticComponent<StopwatchPieBareProps & RefAttributes<Svg>>;

export default StopwatchPieBare;
export { StopwatchPieBare };
