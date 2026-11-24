import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DashboardGaugeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DashboardGauge: ForwardRefExoticComponent<DashboardGaugeProps & RefAttributes<Svg>>;

export default DashboardGauge;
export { DashboardGauge };
