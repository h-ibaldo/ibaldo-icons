import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunStarHalfSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunStarHalfSquare: ForwardRefExoticComponent<SunStarHalfSquareProps & RefAttributes<Svg>>;

export default SunStarHalfSquare;
export { SunStarHalfSquare };
