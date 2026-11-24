import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDashedLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDashedLong: ForwardRefExoticComponent<ClockDashedLongProps & RefAttributes<Svg>>;

export default ClockDashedLong;
export { ClockDashedLong };
