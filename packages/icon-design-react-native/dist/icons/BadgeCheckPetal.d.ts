import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeCheckPetalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeCheckPetal: ForwardRefExoticComponent<BadgeCheckPetalProps & RefAttributes<Svg>>;

export default BadgeCheckPetal;
export { BadgeCheckPetal };
