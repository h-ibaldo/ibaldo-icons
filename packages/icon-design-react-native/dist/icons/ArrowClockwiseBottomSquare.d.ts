import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseBottomSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseBottomSquare: ForwardRefExoticComponent<ArrowClockwiseBottomSquareProps & RefAttributes<Svg>>;

export default ArrowClockwiseBottomSquare;
export { ArrowClockwiseBottomSquare };
