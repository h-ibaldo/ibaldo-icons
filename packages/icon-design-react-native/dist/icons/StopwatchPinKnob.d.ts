import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchPinKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchPinKnob: ForwardRefExoticComponent<StopwatchPinKnobProps & RefAttributes<Svg>>;

export default StopwatchPinKnob;
export { StopwatchPinKnob };
