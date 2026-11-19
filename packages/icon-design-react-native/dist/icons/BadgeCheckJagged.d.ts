import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeCheckJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeCheckJagged: ForwardRefExoticComponent<BadgeCheckJaggedProps & RefAttributes<Svg>>;

export default BadgeCheckJagged;
export { BadgeCheckJagged };
