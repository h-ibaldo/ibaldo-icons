import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseFiveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseFive: ForwardRefExoticComponent<ArrowClockwiseFiveProps & RefAttributes<Svg>>;

export default ArrowClockwiseFive;
export { ArrowClockwiseFive };
