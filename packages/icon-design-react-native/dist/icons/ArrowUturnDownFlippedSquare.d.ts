import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnDownFlippedSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnDownFlippedSquare: ForwardRefExoticComponent<ArrowUturnDownFlippedSquareProps & RefAttributes<Svg>>;

export default ArrowUturnDownFlippedSquare;
export { ArrowUturnDownFlippedSquare };
