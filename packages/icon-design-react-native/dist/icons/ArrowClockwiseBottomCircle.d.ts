import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseBottomCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseBottomCircle: ForwardRefExoticComponent<ArrowClockwiseBottomCircleProps & RefAttributes<Svg>>;

export default ArrowClockwiseBottomCircle;
export { ArrowClockwiseBottomCircle };
