import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarPeakJoinedAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarPeakJoinedAxis: ForwardRefExoticComponent<ChartBarPeakJoinedAxisProps & RefAttributes<Svg>>;

export default ChartBarPeakJoinedAxis;
export { ChartBarPeakJoinedAxis };
