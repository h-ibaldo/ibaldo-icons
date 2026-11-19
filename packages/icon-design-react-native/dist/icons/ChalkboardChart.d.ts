import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChalkboardChartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChalkboardChart: ForwardRefExoticComponent<ChalkboardChartProps & RefAttributes<Svg>>;

export default ChalkboardChart;
export { ChalkboardChart };
