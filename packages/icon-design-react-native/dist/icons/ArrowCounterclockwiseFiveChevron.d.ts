import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseFiveChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseFiveChevron: ForwardRefExoticComponent<ArrowCounterclockwiseFiveChevronProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseFiveChevron;
export { ArrowCounterclockwiseFiveChevron };
