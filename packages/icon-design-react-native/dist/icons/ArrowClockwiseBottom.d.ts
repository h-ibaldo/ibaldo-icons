import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseBottom: ForwardRefExoticComponent<ArrowClockwiseBottomProps & RefAttributes<Svg>>;

export default ArrowClockwiseBottom;
export { ArrowClockwiseBottom };
