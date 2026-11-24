import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpAxis: ForwardRefExoticComponent<ChartTrendUpAxisProps & RefAttributes<Svg>>;

export default ChartTrendUpAxis;
export { ChartTrendUpAxis };
