import type { DefineComponent } from 'vue';

export interface TableClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TableClock: DefineComponent<TableClockProps>;

export default TableClock;
export { TableClock };
