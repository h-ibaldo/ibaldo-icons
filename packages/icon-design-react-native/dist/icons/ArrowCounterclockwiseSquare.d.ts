import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseSquare: ForwardRefExoticComponent<ArrowCounterclockwiseSquareProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseSquare;
export { ArrowCounterclockwiseSquare };
