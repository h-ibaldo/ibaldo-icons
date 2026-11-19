import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseBottomOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseBottomOff: ForwardRefExoticComponent<ArrowCounterclockwiseBottomOffProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseBottomOff;
export { ArrowCounterclockwiseBottomOff };
