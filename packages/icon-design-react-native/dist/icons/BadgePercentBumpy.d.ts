import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgePercentBumpyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgePercentBumpy: ForwardRefExoticComponent<BadgePercentBumpyProps & RefAttributes<Svg>>;

export default BadgePercentBumpy;
export { BadgePercentBumpy };
