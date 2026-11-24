import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseXCircle: ForwardRefExoticComponent<ArrowClockwiseXCircleProps & RefAttributes<Svg>>;

export default ArrowClockwiseXCircle;
export { ArrowClockwiseXCircle };
