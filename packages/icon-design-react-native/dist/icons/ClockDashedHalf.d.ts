import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDashedHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDashedHalf: ForwardRefExoticComponent<ClockDashedHalfProps & RefAttributes<Svg>>;

export default ClockDashedHalf;
export { ClockDashedHalf };
