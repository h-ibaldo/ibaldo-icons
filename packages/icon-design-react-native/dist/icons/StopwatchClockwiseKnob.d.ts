import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchClockwiseKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwiseKnob: ForwardRefExoticComponent<StopwatchClockwiseKnobProps & RefAttributes<Svg>>;

export default StopwatchClockwiseKnob;
export { StopwatchClockwiseKnob };
