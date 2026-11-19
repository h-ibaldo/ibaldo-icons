import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDashedQuarterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDashedQuarter: ForwardRefExoticComponent<ClockDashedQuarterProps & RefAttributes<Svg>>;

export default ClockDashedQuarter;
export { ClockDashedQuarter };
