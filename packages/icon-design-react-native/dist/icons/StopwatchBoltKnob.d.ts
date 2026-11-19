import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchBoltKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchBoltKnob: ForwardRefExoticComponent<StopwatchBoltKnobProps & RefAttributes<Svg>>;

export default StopwatchBoltKnob;
export { StopwatchBoltKnob };
