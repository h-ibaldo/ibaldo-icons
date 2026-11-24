import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TableCellsSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TableCellsSplit: ForwardRefExoticComponent<TableCellsSplitProps & RefAttributes<Svg>>;

export default TableCellsSplit;
export { TableCellsSplit };
