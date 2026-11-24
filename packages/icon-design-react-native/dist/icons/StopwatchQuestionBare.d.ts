import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchQuestionBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchQuestionBare: ForwardRefExoticComponent<StopwatchQuestionBareProps & RefAttributes<Svg>>;

export default StopwatchQuestionBare;
export { StopwatchQuestionBare };
