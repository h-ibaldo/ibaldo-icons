import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseFiveChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseFiveChevron: ForwardRefExoticComponent<ArrowClockwiseFiveChevronProps & RefAttributes<Svg>>;

export default ArrowClockwiseFiveChevron;
export { ArrowClockwiseFiveChevron };
