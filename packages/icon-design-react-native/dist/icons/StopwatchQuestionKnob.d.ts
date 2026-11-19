import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchQuestionKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchQuestionKnob: ForwardRefExoticComponent<StopwatchQuestionKnobProps & RefAttributes<Svg>>;

export default StopwatchQuestionKnob;
export { StopwatchQuestionKnob };
