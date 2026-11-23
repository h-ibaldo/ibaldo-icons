import type { DefineComponent } from 'vue';

export interface TableCellsMergeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TableCellsMerge: DefineComponent<TableCellsMergeProps>;

export default TableCellsMerge;
export { TableCellsMerge };
