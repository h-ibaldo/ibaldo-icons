import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgePercentJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgePercentJagged: ForwardRefExoticComponent<BadgePercentJaggedProps & RefAttributes<Svg>>;

export default BadgePercentJagged;
export { BadgePercentJagged };
