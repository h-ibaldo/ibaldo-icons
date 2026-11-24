import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeCheck: ForwardRefExoticComponent<BadgeCheckProps & RefAttributes<Svg>>;

export default BadgeCheck;
export { BadgeCheck };
