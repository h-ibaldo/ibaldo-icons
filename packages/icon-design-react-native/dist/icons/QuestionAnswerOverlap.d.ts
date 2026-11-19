import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QuestionAnswerOverlapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const QuestionAnswerOverlap: ForwardRefExoticComponent<QuestionAnswerOverlapProps & RefAttributes<Svg>>;

export default QuestionAnswerOverlap;
export { QuestionAnswerOverlap };
