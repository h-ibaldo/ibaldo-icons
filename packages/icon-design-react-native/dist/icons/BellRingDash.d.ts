import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellRingDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellRingDash: ForwardRefExoticComponent<BellRingDashProps & RefAttributes<Svg>>;

export default BellRingDash;
export { BellRingDash };
