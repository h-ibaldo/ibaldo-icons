import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QuestionCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const QuestionCircle: ForwardRefExoticComponent<QuestionCircleProps & RefAttributes<Svg>>;

export default QuestionCircle;
export { QuestionCircle };
