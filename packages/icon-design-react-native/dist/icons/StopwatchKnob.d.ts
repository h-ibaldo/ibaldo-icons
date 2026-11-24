import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchKnob: ForwardRefExoticComponent<StopwatchKnobProps & RefAttributes<Svg>>;

export default StopwatchKnob;
export { StopwatchKnob };
