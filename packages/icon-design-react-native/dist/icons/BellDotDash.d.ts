import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellDotDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellDotDash: ForwardRefExoticComponent<BellDotDashProps & RefAttributes<Svg>>;

export default BellDotDash;
export { BellDotDash };
