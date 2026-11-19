import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeCheckSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeCheckSquare: ForwardRefExoticComponent<BadgeCheckSquareProps & RefAttributes<Svg>>;

export default BadgeCheckSquare;
export { BadgeCheckSquare };
