import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchAlertKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchAlertKnob: ForwardRefExoticComponent<StopwatchAlertKnobProps & RefAttributes<Svg>>;

export default StopwatchAlertKnob;
export { StopwatchAlertKnob };
