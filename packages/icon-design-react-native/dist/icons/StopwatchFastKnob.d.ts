import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchFastKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchFastKnob: ForwardRefExoticComponent<StopwatchFastKnobProps & RefAttributes<Svg>>;

export default StopwatchFastKnob;
export { StopwatchFastKnob };
