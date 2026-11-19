import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDashedQuarterRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDashedQuarterRight: ForwardRefExoticComponent<ClockDashedQuarterRightProps & RefAttributes<Svg>>;

export default ClockDashedQuarterRight;
export { ClockDashedQuarterRight };
