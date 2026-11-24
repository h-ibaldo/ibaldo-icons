import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeQuestionJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionJagged: ForwardRefExoticComponent<BadgeQuestionJaggedProps & RefAttributes<Svg>>;

export default BadgeQuestionJagged;
export { BadgeQuestionJagged };
