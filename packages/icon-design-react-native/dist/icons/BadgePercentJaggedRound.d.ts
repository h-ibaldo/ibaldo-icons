import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgePercentJaggedRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgePercentJaggedRound: ForwardRefExoticComponent<BadgePercentJaggedRoundProps & RefAttributes<Svg>>;

export default BadgePercentJaggedRound;
export { BadgePercentJaggedRound };
