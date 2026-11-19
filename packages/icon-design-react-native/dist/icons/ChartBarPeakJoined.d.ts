import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarPeakJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarPeakJoined: ForwardRefExoticComponent<ChartBarPeakJoinedProps & RefAttributes<Svg>>;

export default ChartBarPeakJoined;
export { ChartBarPeakJoined };
