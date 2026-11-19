import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseThirtyChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseThirtyChevron: ForwardRefExoticComponent<ArrowCounterclockwiseThirtyChevronProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseThirtyChevron;
export { ArrowCounterclockwiseThirtyChevron };
