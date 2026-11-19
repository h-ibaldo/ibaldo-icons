import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarTrendUpThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarTrendUpThin: ForwardRefExoticComponent<ChartBarTrendUpThinProps & RefAttributes<Svg>>;

export default ChartBarTrendUpThin;
export { ChartBarTrendUpThin };
