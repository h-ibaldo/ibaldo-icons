import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseBottom: ForwardRefExoticComponent<ArrowCounterclockwiseBottomProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseBottom;
export { ArrowCounterclockwiseBottom };
