import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseBottomCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseBottomCircle: ForwardRefExoticComponent<ArrowCounterclockwiseBottomCircleProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseBottomCircle;
export { ArrowCounterclockwiseBottomCircle };
