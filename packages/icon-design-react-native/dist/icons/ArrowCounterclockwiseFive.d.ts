import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseFiveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseFive: ForwardRefExoticComponent<ArrowCounterclockwiseFiveProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseFive;
export { ArrowCounterclockwiseFive };
