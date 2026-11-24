import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellXDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellXDash: ForwardRefExoticComponent<BellXDashProps & RefAttributes<Svg>>;

export default BellXDash;
export { BellXDash };
