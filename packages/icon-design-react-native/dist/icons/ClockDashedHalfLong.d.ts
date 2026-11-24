import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDashedHalfLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDashedHalfLong: ForwardRefExoticComponent<ClockDashedHalfLongProps & RefAttributes<Svg>>;

export default ClockDashedHalfLong;
export { ClockDashedHalfLong };
