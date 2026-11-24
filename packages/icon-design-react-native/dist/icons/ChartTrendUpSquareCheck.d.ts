import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpSquareCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpSquareCheck: ForwardRefExoticComponent<ChartTrendUpSquareCheckProps & RefAttributes<Svg>>;

export default ChartTrendUpSquareCheck;
export { ChartTrendUpSquareCheck };
