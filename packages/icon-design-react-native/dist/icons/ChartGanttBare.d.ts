import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartGanttBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartGanttBare: ForwardRefExoticComponent<ChartGanttBareProps & RefAttributes<Svg>>;

export default ChartGanttBare;
export { ChartGanttBare };
