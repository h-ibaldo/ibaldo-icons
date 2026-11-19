import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnLeftFlippedSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnLeftFlippedSquare: ForwardRefExoticComponent<ArrowUturnLeftFlippedSquareProps & RefAttributes<Svg>>;

export default ArrowUturnLeftFlippedSquare;
export { ArrowUturnLeftFlippedSquare };
