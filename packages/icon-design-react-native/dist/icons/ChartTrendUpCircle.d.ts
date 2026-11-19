import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpCircle: ForwardRefExoticComponent<ChartTrendUpCircleProps & RefAttributes<Svg>>;

export default ChartTrendUpCircle;
export { ChartTrendUpCircle };
