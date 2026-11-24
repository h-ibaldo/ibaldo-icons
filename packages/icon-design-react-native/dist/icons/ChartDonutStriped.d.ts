import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartDonutStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartDonutStriped: ForwardRefExoticComponent<ChartDonutStripedProps & RefAttributes<Svg>>;

export default ChartDonutStriped;
export { ChartDonutStriped };
