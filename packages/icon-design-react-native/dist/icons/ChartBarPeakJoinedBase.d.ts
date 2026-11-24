import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarPeakJoinedBaseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarPeakJoinedBase: ForwardRefExoticComponent<ChartBarPeakJoinedBaseProps & RefAttributes<Svg>>;

export default ChartBarPeakJoinedBase;
export { ChartBarPeakJoinedBase };
