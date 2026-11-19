import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCircleOffDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCircleOffDash: ForwardRefExoticComponent<BellCircleOffDashProps & RefAttributes<Svg>>;

export default BellCircleOffDash;
export { BellCircleOffDash };
