import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUp: ForwardRefExoticComponent<ChartTrendUpProps & RefAttributes<Svg>>;

export default ChartTrendUp;
export { ChartTrendUp };
