import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarHorizontalPeakAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontalPeakAxis: ForwardRefExoticComponent<ChartBarHorizontalPeakAxisProps & RefAttributes<Svg>>;

export default ChartBarHorizontalPeakAxis;
export { ChartBarHorizontalPeakAxis };
