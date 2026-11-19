import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunStarHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunStarHalf: ForwardRefExoticComponent<SunStarHalfProps & RefAttributes<Svg>>;

export default SunStarHalf;
export { SunStarHalf };
