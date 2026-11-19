import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmQuestionBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmQuestionBare: ForwardRefExoticComponent<AlarmQuestionBareProps & RefAttributes<Svg>>;

export default AlarmQuestionBare;
export { AlarmQuestionBare };
