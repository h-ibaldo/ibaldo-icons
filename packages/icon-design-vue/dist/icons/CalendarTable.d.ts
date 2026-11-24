import type { DefineComponent } from 'vue';

export interface CalendarTableProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarTable: DefineComponent<CalendarTableProps>;

export default CalendarTable;
export { CalendarTable };
