import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeQuestionNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionNotched: ForwardRefExoticComponent<BadgeQuestionNotchedProps & RefAttributes<Svg>>;

export default BadgeQuestionNotched;
export { BadgeQuestionNotched };
