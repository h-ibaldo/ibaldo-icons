import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeQuestionPetalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionPetal: ForwardRefExoticComponent<BadgeQuestionPetalProps & RefAttributes<Svg>>;

export default BadgeQuestionPetal;
export { BadgeQuestionPetal };
