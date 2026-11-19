import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnLeftSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnLeftSquare: ForwardRefExoticComponent<ArrowUturnLeftSquareProps & RefAttributes<Svg>>;

export default ArrowUturnLeftSquare;
export { ArrowUturnLeftSquare };
