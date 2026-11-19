import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DashboardTrendUpPieProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DashboardTrendUpPie: ForwardRefExoticComponent<DashboardTrendUpPieProps & RefAttributes<Svg>>;

export default DashboardTrendUpPie;
export { DashboardTrendUpPie };
