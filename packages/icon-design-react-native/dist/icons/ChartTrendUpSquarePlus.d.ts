import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpSquarePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpSquarePlus: ForwardRefExoticComponent<ChartTrendUpSquarePlusProps & RefAttributes<Svg>>;

export default ChartTrendUpSquarePlus;
export { ChartTrendUpSquarePlus };
