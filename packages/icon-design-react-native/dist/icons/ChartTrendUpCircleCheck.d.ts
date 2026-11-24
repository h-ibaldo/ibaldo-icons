import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpCircleCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpCircleCheck: ForwardRefExoticComponent<ChartTrendUpCircleCheckProps & RefAttributes<Svg>>;

export default ChartTrendUpCircleCheck;
export { ChartTrendUpCircleCheck };
