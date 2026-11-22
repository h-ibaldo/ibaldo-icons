import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartAxisGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartAxisGrid: ForwardRefExoticComponent<ChartAxisGridProps & RefAttributes<Svg>>;

export default ChartAxisGrid;
export { ChartAxisGrid };
