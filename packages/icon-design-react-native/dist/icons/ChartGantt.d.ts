import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartGanttProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartGantt: ForwardRefExoticComponent<ChartGanttProps & RefAttributes<Svg>>;

export default ChartGantt;
export { ChartGantt };
