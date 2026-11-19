import type { DefineComponent } from 'vue';

export interface CalendarDayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarDay: DefineComponent<CalendarDayProps>;

export default CalendarDay;
export { CalendarDay };
