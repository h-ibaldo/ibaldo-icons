import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchQuestionDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchQuestionDetached: ForwardRefExoticComponent<StopwatchQuestionDetachedProps & RefAttributes<Svg>>;

export default StopwatchQuestionDetached;
export { StopwatchQuestionDetached };
