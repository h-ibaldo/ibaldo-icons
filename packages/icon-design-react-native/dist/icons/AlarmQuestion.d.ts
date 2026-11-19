import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmQuestionProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmQuestion: ForwardRefExoticComponent<AlarmQuestionProps & RefAttributes<Svg>>;

export default AlarmQuestion;
export { AlarmQuestion };
