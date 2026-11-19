import type { DefineComponent } from 'vue';

export interface CalendarRowsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarRows: DefineComponent<CalendarRowsProps>;

export default CalendarRows;
export { CalendarRows };
