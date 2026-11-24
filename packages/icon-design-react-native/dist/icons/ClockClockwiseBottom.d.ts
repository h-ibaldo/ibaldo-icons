import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockClockwiseBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockClockwiseBottom: ForwardRefExoticComponent<ClockClockwiseBottomProps & RefAttributes<Svg>>;

export default ClockClockwiseBottom;
export { ClockClockwiseBottom };
