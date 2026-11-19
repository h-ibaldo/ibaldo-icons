import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDashedHalfBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDashedHalfBottom: ForwardRefExoticComponent<ClockDashedHalfBottomProps & RefAttributes<Svg>>;

export default ClockDashedHalfBottom;
export { ClockDashedHalfBottom };
