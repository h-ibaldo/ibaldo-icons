import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseDotsChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseDotsChevron: ForwardRefExoticComponent<ArrowCounterclockwiseDotsChevronProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseDotsChevron;
export { ArrowCounterclockwiseDotsChevron };
