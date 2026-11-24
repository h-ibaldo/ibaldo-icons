import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseCheckCircle: ForwardRefExoticComponent<ArrowClockwiseCheckCircleProps & RefAttributes<Svg>>;

export default ArrowClockwiseCheckCircle;
export { ArrowClockwiseCheckCircle };
