import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellClockDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellClockDash: ForwardRefExoticComponent<BellClockDashProps & RefAttributes<Svg>>;

export default BellClockDash;
export { BellClockDash };
