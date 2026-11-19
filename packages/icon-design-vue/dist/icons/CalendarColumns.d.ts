import type { DefineComponent } from 'vue';

export interface CalendarColumnsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarColumns: DefineComponent<CalendarColumnsProps>;

export default CalendarColumns;
export { CalendarColumns };
