import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TableCellsMergeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TableCellsMerge: ForwardRefExoticComponent<TableCellsMergeProps & RefAttributes<Svg>>;

export default TableCellsMerge;
export { TableCellsMerge };
