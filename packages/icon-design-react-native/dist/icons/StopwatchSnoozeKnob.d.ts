import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchSnoozeKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchSnoozeKnob: ForwardRefExoticComponent<StopwatchSnoozeKnobProps & RefAttributes<Svg>>;

export default StopwatchSnoozeKnob;
export { StopwatchSnoozeKnob };
