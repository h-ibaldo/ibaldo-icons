import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellAlertDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellAlertDash: ForwardRefExoticComponent<BellAlertDashProps & RefAttributes<Svg>>;

export default BellAlertDash;
export { BellAlertDash };
