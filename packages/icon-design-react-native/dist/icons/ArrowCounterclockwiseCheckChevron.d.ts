import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseCheckChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseCheckChevron: ForwardRefExoticComponent<ArrowCounterclockwiseCheckChevronProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseCheckChevron;
export { ArrowCounterclockwiseCheckChevron };
