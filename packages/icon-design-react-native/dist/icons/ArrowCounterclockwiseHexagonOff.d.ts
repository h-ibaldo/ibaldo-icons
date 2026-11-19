import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseHexagonOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseHexagonOff: ForwardRefExoticComponent<ArrowCounterclockwiseHexagonOffProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseHexagonOff;
export { ArrowCounterclockwiseHexagonOff };
