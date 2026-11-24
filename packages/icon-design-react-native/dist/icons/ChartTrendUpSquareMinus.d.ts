import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpSquareMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpSquareMinus: ForwardRefExoticComponent<ChartTrendUpSquareMinusProps & RefAttributes<Svg>>;

export default ChartTrendUpSquareMinus;
export { ChartTrendUpSquareMinus };
