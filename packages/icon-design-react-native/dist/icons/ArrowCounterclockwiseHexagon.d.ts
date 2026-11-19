import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseHexagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseHexagon: ForwardRefExoticComponent<ArrowCounterclockwiseHexagonProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseHexagon;
export { ArrowCounterclockwiseHexagon };
