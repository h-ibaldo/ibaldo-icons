import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeQuestionWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionWavy: ForwardRefExoticComponent<BadgeQuestionWavyProps & RefAttributes<Svg>>;

export default BadgeQuestionWavy;
export { BadgeQuestionWavy };
