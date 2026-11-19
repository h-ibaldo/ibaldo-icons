import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpSquareDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpSquareDot: ForwardRefExoticComponent<ChartTrendUpSquareDotProps & RefAttributes<Svg>>;

export default ChartTrendUpSquareDot;
export { ChartTrendUpSquareDot };
