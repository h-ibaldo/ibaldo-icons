import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPlusKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPlusKnob: ForwardRefExoticComponent<StopwatchPlusKnobProps & RefAttributes<Svg>>;

export default StopwatchPlusKnob;
export { StopwatchPlusKnob };
