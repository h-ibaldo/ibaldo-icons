import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseXChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseXChevron: ForwardRefExoticComponent<ArrowCounterclockwiseXChevronProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseXChevron;
export { ArrowCounterclockwiseXChevron };
