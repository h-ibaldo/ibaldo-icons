import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerQuestionStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerQuestionStraight: ForwardRefExoticComponent<PointerQuestionStraightProps & RefAttributes<Svg>>;

export default PointerQuestionStraight;
export { PointerQuestionStraight };
