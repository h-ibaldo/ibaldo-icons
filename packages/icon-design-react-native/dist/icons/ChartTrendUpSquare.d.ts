import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpSquare: ForwardRefExoticComponent<ChartTrendUpSquareProps & RefAttributes<Svg>>;

export default ChartTrendUpSquare;
export { ChartTrendUpSquare };
