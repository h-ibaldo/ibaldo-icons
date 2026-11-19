import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseCheck: ForwardRefExoticComponent<ArrowClockwiseCheckProps & RefAttributes<Svg>>;

export default ArrowClockwiseCheck;
export { ArrowClockwiseCheck };
