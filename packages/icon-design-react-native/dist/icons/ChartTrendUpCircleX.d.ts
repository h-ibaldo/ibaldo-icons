import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpCircleXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpCircleX: ForwardRefExoticComponent<ChartTrendUpCircleXProps & RefAttributes<Svg>>;

export default ChartTrendUpCircleX;
export { ChartTrendUpCircleX };
