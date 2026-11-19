import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchQuestionTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchQuestionTick: ForwardRefExoticComponent<StopwatchQuestionTickProps & RefAttributes<Svg>>;

export default StopwatchQuestionTick;
export { StopwatchQuestionTick };
