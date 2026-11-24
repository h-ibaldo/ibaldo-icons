import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QuestionSquareStackOverlapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const QuestionSquareStackOverlap: ForwardRefExoticComponent<QuestionSquareStackOverlapProps & RefAttributes<Svg>>;

export default QuestionSquareStackOverlap;
export { QuestionSquareStackOverlap };
