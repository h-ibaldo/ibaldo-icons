import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchXKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchXKnob: ForwardRefExoticComponent<StopwatchXKnobProps & RefAttributes<Svg>>;

export default StopwatchXKnob;
export { StopwatchXKnob };
