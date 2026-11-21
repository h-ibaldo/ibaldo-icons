import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeSlashJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeSlashJagged: ForwardRefExoticComponent<BadgeSlashJaggedProps & RefAttributes<Svg>>;

export default BadgeSlashJagged;
export { BadgeSlashJagged };
