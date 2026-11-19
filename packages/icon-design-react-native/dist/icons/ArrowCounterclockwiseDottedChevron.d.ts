import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseDottedChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseDottedChevron: ForwardRefExoticComponent<ArrowCounterclockwiseDottedChevronProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseDottedChevron;
export { ArrowCounterclockwiseDottedChevron };
