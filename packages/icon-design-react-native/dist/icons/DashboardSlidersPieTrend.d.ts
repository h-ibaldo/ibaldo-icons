import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DashboardSlidersPieTrendProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DashboardSlidersPieTrend: ForwardRefExoticComponent<DashboardSlidersPieTrendProps & RefAttributes<Svg>>;

export default DashboardSlidersPieTrend;
export { DashboardSlidersPieTrend };
