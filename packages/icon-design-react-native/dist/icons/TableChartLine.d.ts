import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TableChartLineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TableChartLine: ForwardRefExoticComponent<TableChartLineProps & RefAttributes<Svg>>;

export default TableChartLine;
export { TableChartLine };
