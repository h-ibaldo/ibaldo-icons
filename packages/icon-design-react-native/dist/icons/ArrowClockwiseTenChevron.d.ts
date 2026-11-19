import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseTenChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseTenChevron: ForwardRefExoticComponent<ArrowClockwiseTenChevronProps & RefAttributes<Svg>>;

export default ArrowClockwiseTenChevron;
export { ArrowClockwiseTenChevron };
