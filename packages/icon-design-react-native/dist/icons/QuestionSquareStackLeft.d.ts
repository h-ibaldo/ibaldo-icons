import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QuestionSquareStackLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const QuestionSquareStackLeft: ForwardRefExoticComponent<QuestionSquareStackLeftProps & RefAttributes<Svg>>;

export default QuestionSquareStackLeft;
export { QuestionSquareStackLeft };
