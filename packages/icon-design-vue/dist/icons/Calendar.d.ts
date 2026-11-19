import type { DefineComponent } from 'vue';

export interface CalendarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Calendar: DefineComponent<CalendarProps>;

export default Calendar;
export { Calendar };
