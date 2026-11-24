import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DashboardPieListBarsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DashboardPieListBars: ForwardRefExoticComponent<DashboardPieListBarsProps & RefAttributes<Svg>>;

export default DashboardPieListBars;
export { DashboardPieListBars };
