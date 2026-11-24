import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnUpFlippedSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnUpFlippedSquare: ForwardRefExoticComponent<ArrowUturnUpFlippedSquareProps & RefAttributes<Svg>>;

export default ArrowUturnUpFlippedSquare;
export { ArrowUturnUpFlippedSquare };
