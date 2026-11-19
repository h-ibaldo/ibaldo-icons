import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QuestionSquareSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const QuestionSquareSmall: ForwardRefExoticComponent<QuestionSquareSmallProps & RefAttributes<Svg>>;

export default QuestionSquareSmall;
export { QuestionSquareSmall };
