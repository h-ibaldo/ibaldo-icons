import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseLockChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseLockChevron: ForwardRefExoticComponent<ArrowCounterclockwiseLockChevronProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseLockChevron;
export { ArrowCounterclockwiseLockChevron };
