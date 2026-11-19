import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpSquareXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpSquareX: ForwardRefExoticComponent<ChartTrendUpSquareXProps & RefAttributes<Svg>>;

export default ChartTrendUpSquareX;
export { ChartTrendUpSquareX };
