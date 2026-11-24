import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeCheckNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeCheckNotched: ForwardRefExoticComponent<BadgeCheckNotchedProps & RefAttributes<Svg>>;

export default BadgeCheckNotched;
export { BadgeCheckNotched };
