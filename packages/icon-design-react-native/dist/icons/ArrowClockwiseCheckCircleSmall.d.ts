import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseCheckCircleSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseCheckCircleSmall: ForwardRefExoticComponent<ArrowClockwiseCheckCircleSmallProps & RefAttributes<Svg>>;

export default ArrowClockwiseCheckCircleSmall;
export { ArrowClockwiseCheckCircleSmall };
