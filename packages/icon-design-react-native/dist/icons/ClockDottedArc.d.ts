import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDottedArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDottedArc: ForwardRefExoticComponent<ClockDottedArcProps & RefAttributes<Svg>>;

export default ClockDottedArc;
export { ClockDottedArc };
