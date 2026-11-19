import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeStarJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeStarJagged: ForwardRefExoticComponent<BadgeStarJaggedProps & RefAttributes<Svg>>;

export default BadgeStarJagged;
export { BadgeStarJagged };
