import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineUpAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineUpAxis: ForwardRefExoticComponent<ChartLineUpAxisProps & RefAttributes<Svg>>;

export default ChartLineUpAxis;
export { ChartLineUpAxis };
