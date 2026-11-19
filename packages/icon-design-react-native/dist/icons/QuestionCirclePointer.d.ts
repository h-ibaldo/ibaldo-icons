import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QuestionCirclePointerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const QuestionCirclePointer: ForwardRefExoticComponent<QuestionCirclePointerProps & RefAttributes<Svg>>;

export default QuestionCirclePointer;
export { QuestionCirclePointer };
