import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunStarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunStar: ForwardRefExoticComponent<SunStarProps & RefAttributes<Svg>>;

export default SunStar;
export { SunStar };
