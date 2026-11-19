import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseSquare: ForwardRefExoticComponent<ArrowClockwiseSquareProps & RefAttributes<Svg>>;

export default ArrowClockwiseSquare;
export { ArrowClockwiseSquare };
