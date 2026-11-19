import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseChevron: ForwardRefExoticComponent<ArrowCounterclockwiseChevronProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseChevron;
export { ArrowCounterclockwiseChevron };
