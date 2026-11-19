import type { DefineComponent } from 'vue';

export interface TableChartLineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TableChartLine: DefineComponent<TableChartLineProps>;

export default TableChartLine;
export { TableChartLine };
