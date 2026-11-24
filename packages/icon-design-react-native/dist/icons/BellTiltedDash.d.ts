import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellTiltedDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellTiltedDash: ForwardRefExoticComponent<BellTiltedDashProps & RefAttributes<Svg>>;

export default BellTiltedDash;
export { BellTiltedDash };
