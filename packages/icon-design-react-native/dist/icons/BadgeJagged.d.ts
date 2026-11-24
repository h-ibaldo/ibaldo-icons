import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeJagged: ForwardRefExoticComponent<BadgeJaggedProps & RefAttributes<Svg>>;

export default BadgeJagged;
export { BadgeJagged };
