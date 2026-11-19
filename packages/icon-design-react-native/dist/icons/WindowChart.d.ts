import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChart: ForwardRefExoticComponent<WindowChartProps & RefAttributes<Svg>>;

export default WindowChart;
export { WindowChart };
