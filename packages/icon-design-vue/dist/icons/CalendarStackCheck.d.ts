import type { DefineComponent } from 'vue';

export interface CalendarStackCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarStackCheck: DefineComponent<CalendarStackCheckProps>;

export default CalendarStackCheck;
export { CalendarStackCheck };
