import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseTenChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseTenChevron: ForwardRefExoticComponent<ArrowCounterclockwiseTenChevronProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseTenChevron;
export { ArrowCounterclockwiseTenChevron };
