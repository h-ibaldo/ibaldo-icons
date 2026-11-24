import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchOffKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchOffKnob: ForwardRefExoticComponent<StopwatchOffKnobProps & RefAttributes<Svg>>;

export default StopwatchOffKnob;
export { StopwatchOffKnob };
