import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnUpSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnUpSquare: ForwardRefExoticComponent<ArrowUturnUpSquareProps & RefAttributes<Svg>>;

export default ArrowUturnUpSquare;
export { ArrowUturnUpSquare };
