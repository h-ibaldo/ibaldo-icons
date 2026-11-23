import type { DefineComponent } from 'vue';

export interface TableCellsSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TableCellsSplit: DefineComponent<TableCellsSplitProps>;

export default TableCellsSplit;
export { TableCellsSplit };
