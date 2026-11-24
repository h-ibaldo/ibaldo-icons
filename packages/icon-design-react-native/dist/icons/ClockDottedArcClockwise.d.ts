import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDottedArcClockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDottedArcClockwise: ForwardRefExoticComponent<ClockDottedArcClockwiseProps & RefAttributes<Svg>>;

export default ClockDottedArcClockwise;
export { ClockDottedArcClockwise };
