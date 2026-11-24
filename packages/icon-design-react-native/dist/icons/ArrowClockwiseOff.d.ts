import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseOff: ForwardRefExoticComponent<ArrowClockwiseOffProps & RefAttributes<Svg>>;

export default ArrowClockwiseOff;
export { ArrowClockwiseOff };
