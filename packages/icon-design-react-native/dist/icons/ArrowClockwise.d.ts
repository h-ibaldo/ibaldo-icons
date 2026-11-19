import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwise: ForwardRefExoticComponent<ArrowClockwiseProps & RefAttributes<Svg>>;

export default ArrowClockwise;
export { ArrowClockwise };
