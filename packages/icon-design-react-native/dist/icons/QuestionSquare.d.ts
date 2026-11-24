import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QuestionSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const QuestionSquare: ForwardRefExoticComponent<QuestionSquareProps & RefAttributes<Svg>>;

export default QuestionSquare;
export { QuestionSquare };
