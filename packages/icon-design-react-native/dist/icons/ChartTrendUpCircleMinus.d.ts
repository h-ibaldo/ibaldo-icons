import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpCircleMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpCircleMinus: ForwardRefExoticComponent<ChartTrendUpCircleMinusProps & RefAttributes<Svg>>;

export default ChartTrendUpCircleMinus;
export { ChartTrendUpCircleMinus };
