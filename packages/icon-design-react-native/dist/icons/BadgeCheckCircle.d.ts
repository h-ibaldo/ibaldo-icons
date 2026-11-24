import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeCheckCircle: ForwardRefExoticComponent<BadgeCheckCircleProps & RefAttributes<Svg>>;

export default BadgeCheckCircle;
export { BadgeCheckCircle };
