import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeQuestionBumpyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionBumpy: ForwardRefExoticComponent<BadgeQuestionBumpyProps & RefAttributes<Svg>>;

export default BadgeQuestionBumpy;
export { BadgeQuestionBumpy };
