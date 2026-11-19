import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpCirclePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpCirclePlus: ForwardRefExoticComponent<ChartTrendUpCirclePlusProps & RefAttributes<Svg>>;

export default ChartTrendUpCirclePlus;
export { ChartTrendUpCirclePlus };
