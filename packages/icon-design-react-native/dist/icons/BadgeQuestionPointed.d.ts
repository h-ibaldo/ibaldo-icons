import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeQuestionPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionPointed: ForwardRefExoticComponent<BadgeQuestionPointedProps & RefAttributes<Svg>>;

export default BadgeQuestionPointed;
export { BadgeQuestionPointed };
