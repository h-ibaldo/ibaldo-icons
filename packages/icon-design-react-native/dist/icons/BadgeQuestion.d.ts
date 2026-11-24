import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeQuestionProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeQuestion: ForwardRefExoticComponent<BadgeQuestionProps & RefAttributes<Svg>>;

export default BadgeQuestion;
export { BadgeQuestion };
