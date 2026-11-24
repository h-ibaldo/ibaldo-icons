import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseBottomOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseBottomOff: ForwardRefExoticComponent<ArrowClockwiseBottomOffProps & RefAttributes<Svg>>;

export default ArrowClockwiseBottomOff;
export { ArrowClockwiseBottomOff };
