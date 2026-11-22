import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBellAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBellAxis: ForwardRefExoticComponent<ChartBellAxisProps & RefAttributes<Svg>>;

export default ChartBellAxis;
export { ChartBellAxis };
