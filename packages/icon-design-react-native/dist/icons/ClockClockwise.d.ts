import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockClockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockClockwise: ForwardRefExoticComponent<ClockClockwiseProps & RefAttributes<Svg>>;

export default ClockClockwise;
export { ClockClockwise };
