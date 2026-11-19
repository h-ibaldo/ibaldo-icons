import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockCounterclockwiseBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockCounterclockwiseBottom: ForwardRefExoticComponent<ClockCounterclockwiseBottomProps & RefAttributes<Svg>>;

export default ClockCounterclockwiseBottom;
export { ClockCounterclockwiseBottom };
