import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QuestionCircleSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const QuestionCircleSmall: ForwardRefExoticComponent<QuestionCircleSmallProps & RefAttributes<Svg>>;

export default QuestionCircleSmall;
export { QuestionCircleSmall };
