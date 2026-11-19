import type { DefineComponent } from 'vue';

export interface CalendarGridColumnsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarGridColumns: DefineComponent<CalendarGridColumnsProps>;

export default CalendarGridColumns;
export { CalendarGridColumns };
