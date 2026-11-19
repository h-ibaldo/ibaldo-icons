import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeCheckPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeCheckPointed: ForwardRefExoticComponent<BadgeCheckPointedProps & RefAttributes<Svg>>;

export default BadgeCheckPointed;
export { BadgeCheckPointed };
