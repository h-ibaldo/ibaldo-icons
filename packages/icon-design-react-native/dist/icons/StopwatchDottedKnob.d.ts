import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchDottedKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchDottedKnob: ForwardRefExoticComponent<StopwatchDottedKnobProps & RefAttributes<Svg>>;

export default StopwatchDottedKnob;
export { StopwatchDottedKnob };
