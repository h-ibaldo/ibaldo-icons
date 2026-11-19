import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpSquareArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpSquareArrowRight: ForwardRefExoticComponent<ChartTrendUpSquareArrowRightProps & RefAttributes<Svg>>;

export default ChartTrendUpSquareArrowRight;
export { ChartTrendUpSquareArrowRight };
