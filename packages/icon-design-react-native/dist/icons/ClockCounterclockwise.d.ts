import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockCounterclockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockCounterclockwise: ForwardRefExoticComponent<ClockCounterclockwiseProps & RefAttributes<Svg>>;

export default ClockCounterclockwise;
export { ClockCounterclockwise };
