import type { DefineComponent } from 'vue';

export interface TablePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TablePlus: DefineComponent<TablePlusProps>;

export default TablePlus;
export { TablePlus };
