import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarPeakProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarPeak: ForwardRefExoticComponent<ChartBarPeakProps & RefAttributes<Svg>>;

export default ChartBarPeak;
export { ChartBarPeak };
